import React from "react";
import classessass from "./userProfileChangePasswordStyle.module.scss";
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
        marginTop: -12,
        marginLeft: -12,
    },
}));

function UserProfileChangePassword(props) {

    console.log(props.userDetail);

    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });

    const userLocalStorage = props.item;

    const { taiKhoan, hoTen, soDT, email, matKhau } = userLocalStorage;

    let [user, setUserProfile] = React.useState({
        userProfile: {
            taiKhoan: taiKhoan,
            matKhau: '',
            hoTen: hoTen,
            soDT: soDT,
            maLoaiNguoiDung: localStorage.getItem('userRight'),
            maNhom: 'GP01',
            email: email,
        },
        changePassword: {
            matKhauMoi: '',
            reMatKhauMoi: '',
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
        let changePasswordUpdate = { ...user.changePassword, [name]: value };
        setUserProfile({
            userProfile: userProfileUpdate,
            changePassword: changePasswordUpdate
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
                // for (let valueNotFind in user.userProfile) {
                //     if (user.userProfile[valueNotFind] === "") {
                //         valid = false;
                //         setSuccess(false);
                //     }
                // }
                //User
                if (!props.credentialsAdmin) {
                    if (user.userProfile.taiKhoan !== props.userDetail.taiKhoan) {
                        valid = false;
                        setSuccess(false);
                    }
                    if (user.userProfile.matKhau !== props.userDetail.matKhau) {
                        valid = false;
                        setSuccess(false);
                        alert('Wrong Input Password');
                        return;
                    }
                    if (props.userDetail.matKhau === user.changePassword.matKhauMoi) {
                        valid = false;
                        setSuccess(false);
                        alert('Password Cannot Be The Same');
                        return;
                    }
                    if (user.changePassword.matKhauMoi !== user.changePassword.reMatKhauMoi) {
                        valid = false;
                        setSuccess(false);
                        alert('Invalid RePassword');
                        return;
                    }
                }
                //Admin
                if (props.credentialsAdmin) {
                    if (user.userProfile.taiKhoan !== props.adminDetail.taiKhoan) {
                        valid = false;
                        setSuccess(false);
                    }
                    if (user.userProfile.matKhau !== props.adminDetail.matKhau) {
                        valid = false;
                        setSuccess(false);
                        alert('Wrong Input Password');
                        return;
                    }
                    if (props.adminDetail.matKhau === user.changePassword.matKhauMoi) {
                        valid = false;
                        setSuccess(false);
                        alert('Password Cannot Be The Same');
                        return;
                    }
                    if (user.changePassword.matKhauMoi !== user.changePassword.reMatKhauMoi) {
                        valid = false;
                        setSuccess(false);
                        alert('Invalid RePassword');
                        return;
                    }
                }
                if (valid) {
                    user.userProfile.matKhau = user.changePassword.matKhauMoi;
                    console.log(user.userProfile)
                    setDisabled(!disabled);
                    props.dispatch(userUpdateAction(user.userProfile, props.history));
                    setSuccess(true);
                } else {
                    alert('Invalid Password');
                }
            }, 2000);
        }
    }

    const [disabled, setDisabled] = React.useState(false);

    const handleOnClickEditText = (e) => {
        setDisabled(!disabled);
    }


    return (
        <div className={classessass.tong}>
            <div className="container text-center">
                <form onSubmit={updateUser} style={{ lineHeight: 6 }}>
                    <div>
                        <h3 className="text text-danger text-center">
                            Change Password
                            </h3>
                    </div>
                    <div className="form-group">
                        <TextField name="matKhau" label="Old Password" type="password" className={classes.textField} margin="normal" disabled={!disabled} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <TextField name="matKhauMoi" label="New Password" type="password" className={classes.textField} margin="normal" disabled={!disabled} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <TextField name="reMatKhauMoi" label="ReNew Password" type="password" className={classes.textField} margin="normal" disabled={!disabled} onChange={handleChange} />
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
    // courseList: state.courseList,
    userDetail: state.user.userDetail,
    credentialsAdmin: state.admin.credentials,
    adminDetail: state.admin.adminDetail,
});

export default connect(mapStateToProps)(UserProfileChangePassword);