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

// const userService = new UserService();

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const UserProfile = props => {

    const classes = useStyles();

    const userLocalStorage = JSON.parse(localStorage.getItem(settings.userProfile));

    const { taiKhoan, hoTen, soDT, email } = userLocalStorage;

    let user = useState({
        userProfile: {
            taiKhoan: taiKhoan,
            matKhau: '',
            hoTen: hoTen,
            soDT: soDT,
            maLoaiNguoiDung: 'GV',
            maNhom: 'GP01',
            email: email,
        }
    });

    // let handleChange = e => {
    //     let { name, value } = e.target;
    //     let errorMessage = '';
    //     if (value === "") {
    //         errorMessage = name + ' is required!';
    //     }
    //     //Kiểm tra lỗi 
    //     let userProfileUpdate = { ...user.userProfile, [name]: value };
    //     let errorsUpdate = { ...user.errors, [name]: errorMessage };
    //     setUserProfile({
    //         userProfile: userProfileUpdate,
    //         errors: errorsUpdate
    //     });
    //     console.log(user);
    // }

    // const updateUser = e => {
    //     e.preventDefault();
    //     //update
    //     props.dispatch(userUpdateAction(user.userProfile, props.history));
    // }

    return (
        <div style={{ backgroundColor: '#cfe8fc', height: '600px', padding: '5vh', width: '1000px' }}>
            <div className="container">
                <h3 className="text text-danger">User Profile</h3>
                <div className="form-group">
                    <TextField name="taiKhoan" label="Username" defaultValue={taiKhoan} className={classes.textField} margin="normal" InputProps={{ readOnly: true }} />
                </div>
                <div className="form-group">
                    <TextField name="hoTen" label="Full Name" defaultValue={hoTen} className={classes.textField} margin="normal" InputProps={{ readOnly: true }} />
                </div>
                <div className="form-group">
                    <TextField name="soDT" label="Telephone Number" defaultValue={soDT} className={classes.textField} margin="normal" InputProps={{ readOnly: true }} />
                </div>
                <div className="form-group">
                    <TextField name="email" label="Telephone Number" defaultValue={email} className={classes.textField} margin="normal" InputProps={{ readOnly: true, }} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    updatingUser: state.updatingUser,
    credentials: state.user.credentials,
    courseList: state.courseList,
});

export default connect(mapStateToProps)(UserProfile);