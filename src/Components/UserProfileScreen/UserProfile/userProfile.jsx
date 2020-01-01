import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { userUpdateAction} from "../../../Redux/Action/userAction";
import { settings } from "../../../config/settings";
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
        [theme.breakpoints.up('xs')]:{
            width:200,
           
          },
        [theme.breakpoints.up('sm')]:{
               width:300,
             },
             [theme.breakpoints.up('md')]:{
                width:400,
            
              },[theme.breakpoints.up('lg')]:{
                width:600,
              }
              
        
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        
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

    const userLocalStorage = props.item;

    const { taiKhoan, hoTen, soDT, email } = userLocalStorage;

    let [user, setUserProfile] = useState({
        userProfile: {
            taiKhoan: taiKhoan,
            matKhau: '',
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
                    if (user.errors[errorName] !== "") {
                        valid = false;
                        setSuccess(false);
                    }
                }
                for (let valueNotFind in user.userProfile) {
                    if (user.userProfile[valueNotFind] === "") {
                        valid = false;
                        setSuccess(false);
                    }
                }
                if (!props.credentialsAdmin) {
                    if (user.userProfile.taiKhoan !== props.userDetail.taiKhoan) {
                        valid = false;
                        setSuccess(false);
                    }
                    if (user.userProfile.matKhau !== props.userDetail.matKhau) {
                        valid = false;
                        setSuccess(false);
                        alert('Invalid Password');
                        return;
                    }
                }
                if (props.credentialsAdmin) {
                    if (user.userProfile.taiKhoan !== props.adminDetail.taiKhoan) {
                        valid = false;
                        setSuccess(false);
                    }
                    if (user.userProfile.matKhau !== props.adminDetail.matKhau) {
                        valid = false;
                        setSuccess(false);
                        alert('Invalid Password');
                        return;
                    }
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
                <form onSubmit={updateUser} style={{ lineHeight: 4 }}>
                    <div>
                        {
                            props.credentialsAdmin ? (
                                <h3 className="text text-danger text-center">
                                    Admin Profile
                                </h3>
                            ) : (
                                    <h3 className="text text-danger text-center">
                                        User Profile
                                </h3>
                                )
                        }
                    </div>

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
                        <TextField name="matKhau" label="Password" disabled={!disabled} type="password" className={classes.textField} margin="normal" onChange={handleChange} />
                        <p className="text text-danger">{user.errors.matKhau}</p>
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
    credentialsAdmin: state.admin.credentials,
    adminDetail: state.admin.adminDetail,
});

export default connect(mapStateToProps)(UserProfile);