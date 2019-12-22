import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { userUpdateAction, userLoginAction, userDetail } from "../../../Redux/Action/userAction";
// import UserService from "../../Services/userService";
// import { GET_USER_INFO, USER_INFO } from "../../Redux/Action/actionType";
import { settings } from "../../../config/settings";
// import { restConnector } from "../../Services";
// import reduxAction from "../../Redux/Action/action";
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import classessass from './userProfile.module.scss';
import Footer from "../../../Layouts/Footer/footer";
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: 500,
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

function UserProfile(props) {

    console.log(props.userDetail);

    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    // const handleButtonClick = () => {
    //     if (!loading) {
    //         setSuccess(false);
    //         setLoading(true);
    //         timer.current = setTimeout(() => {
    //             setSuccess(true);
    //             setLoading(false);
    //         }, 2000);
    //     }
    // };

    const userLocalStorage = props.item;

    const { taiKhoan, hoTen, soDT, email, matKhau } = userLocalStorage;

    // console.log(chiTietKhoaHocGhiDanh);

    let [user, setUserProfile] = useState({
        userProfile: {
            taiKhoan: taiKhoan,
            matKhau: matKhau,
            hoTen: hoTen,
            soDT: soDT,
            maLoaiNguoiDung: localStorage.getItem('userRight'),
            maNhom: 'GP01',
            email: email,
        }, errors: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDT: '',
            maLoaiNguoiDung: '',
            maNhom: '',
            email: '',
        }
    });

    let handleChange = e => {
        let { name, value } = e.target;
        let errorMessage = '';
        if (value === "") {
            errorMessage = name + ' is required!';
        }
        //Kiểm tra lỗi 
        let userProfileUpdate = { ...user.userProfile, [name]: value };
        let errorsUpdate = { ...user.errors, [name]: errorMessage };
        setUserProfile({
            userProfile: userProfileUpdate,
            errors: errorsUpdate
        });
        console.log(user);
    }

    const updateUser = e => {
        e.preventDefault();
        let valid = true;
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = setTimeout(() => {
                setLoading(false);
                for (let errorName in user.errors) {
                    if (user.errors[errorName] !== "")
                    {
                        valid = false;
                        setSuccess(false);
                    }
                }
                for (let valueNotFind in user.userProfile) {
                    if (user.userProfile[valueNotFind] === "")
                    {
                        valid = false;
                        setSuccess(false);
                    }
                }
                if(user.userProfile.matKhau !== props.userDetail.matKhau)
                {
                    valid = false;
                    setSuccess(false);
                }
                if(user.userProfile.taiKhoan !== props.userDetail.taiKhoan)
                {
                    valid = false;
                    setSuccess(false);
                }
                if (valid) {
                    setDisabled(!disabled);
                    props.dispatch(userUpdateAction(user.userProfile, props.history));
                    setSuccess(true);
                } else {
                    alert('Please check your Password');
                }
            }, 2000);
        }

    }

    const [disabled, setDisabled] = useState(false);

    const handleOnClickEditText = (e) => {
        setDisabled(!disabled);
    }

    return (
        <div className={classessass.tong}>
            <div className="container text-center">
                <form onSubmit={updateUser} style={{ lineHeight: 6 }}>
                    <h3 className="text text-danger text-center">User Profile</h3>

                    <div className="form-group">
                        <TextField name="taiKhoan" label="Username" defaultValue={taiKhoan} className={classes.textField} margin="normal" InputProps={{ readOnly: true }} onChange={handleChange} />
                        <p className="text text-danger">{user.errors.taiKhoan}</p>
                    </div>
                    <div className="form-group">
                        <TextField name="hoTen" label="Full Name" defaultValue={hoTen} className={classes.textField} margin="normal" disabled={!disabled} onChange={handleChange} />
                        <p className="text text-danger">{user.errors.hoTen}</p>
                    </div>
                    <div className="form-group">
                        <TextField name="email" label="Email" defaultValue={email} className={classes.textField} margin="normal" disabled={!disabled} onChange={handleChange} />
                        <p className="text text-danger">{user.errors.email}</p>
                    </div>
                    <div className="form-group">
                        <TextField name="soDT" label="Telephone Number" defaultValue={soDT} className={classes.textField} margin="normal" disabled={!disabled} onChange={handleChange} />
                        <p className="text text-danger">{user.errors.soDt}</p>
                    </div>
                    <div className="form-group">
                        <TextField name="matKhau" label="Password" InputProps={{ readOnly: true }} defaultValue={matKhau} type="password" className={classes.textField} margin="normal" onChange={handleChange} />
                        <p className="text text-danger">{user.errors.email}</p>
                    </div>
                    {disabled ? (
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={loading}
                                className={buttonClassname}
                            >Save</Button>
                            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                            <Button variant="contained" color="secondary" onClick={handleOnClickEditText}>Cancel</Button>
                        </div>
                    ) : (
                            <Button variant="contained" color="primary" onClick={handleOnClickEditText} onChange={handleChange}>Edit</Button>
                        )
                    }
                </form>
            </div>
        </div>

    )
}

const mapStateToProps = state => ({
    updatingUser: state.updatingUser,
    credentials: state.user.credentials,
    courseList: state.courseList,
    userDetail: state.user.userDetail,
});

export default connect(mapStateToProps)(UserProfile);