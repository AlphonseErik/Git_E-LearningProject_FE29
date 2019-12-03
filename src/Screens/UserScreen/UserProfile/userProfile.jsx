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

// const userService = new UserService();

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        width: 200,
    },
}));

function UserProfile(props) {

    useEffect(() => {
        //Lấy dữ liệu userDetail từ api
        let userAccess = localStorage.getItem(settings.taiKhoan);
        let userProfile = localStorage.getItem("userProfile");
        // let userProfileEdit = localStorage.getItem(settings.userProfileEdit);
        if (userAccess && !userProfile) {
            props.dispatch(userDetail(userAccess));
        }
    },[]);

    const classes = useStyles();

    const userLocalStorage = JSON.parse(localStorage.getItem(settings.userProfile));

    const { taiKhoan, hoTen, soDT, email } = userLocalStorage;

    let [user, setUserProfile] = useState({
        userProfile: {
            taiKhoan: taiKhoan,
            matKhau: '',
            hoTen: hoTen,
            soDT: soDT,
            maLoaiNguoiDung: 'GV',
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
        for (let errorName in user.errors) {
            if (user.errors[errorName] !== "") //1 trong các thuộc tính user.errors ! rỗng  
            {
                valid = false;
            }
        }
        for (let valueNotFind in user.userLogin) {
            if (user.userProfile[valueNotFind] === "") //2 trong các thuộc tính user.userLogin = rỗng 
            {
                valid = false;
            }
        }
        if (valid) {
            props.dispatch(userUpdateAction(user.userProfile, props.history));
            setDisabled(!disabled);
        } else {
            alert('Please check your Email and Password');
        }

    }


    const [disabled, setDisabled] = useState(false);
    // const [change, setChange] = useState(true);

    const handleOnClickEditText = (e) => {
        setDisabled(!disabled);
        // setChange(!change);
    }

    return (
        <div style={{ backgroundColor: '#cfe8fc', height: '500px', padding: '5vh', width: '310px' }}>
            <div className="container">
                <form onSubmit={updateUser}>
                    <h3 className="text text-danger">User Profile</h3>
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
                    {disabled ? (
                        <div>
                            <Button variant="contained" color="primary" type="submit">Save</Button>
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
});

export default connect(mapStateToProps)(UserProfile);