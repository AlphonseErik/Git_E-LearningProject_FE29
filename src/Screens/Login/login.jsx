import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { userLoginAction, userDetail } from "../../Redux/Action/userAction";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import classesStyle from "../Login/loginStyle.module.scss";
import { Container } from "@material-ui/core";
import { GET_USER_INFO } from "../../Redux/Action/actionType";
// import UserProfile from "../../Screens/UserProfile/userProfile";

function Login(props) {
    let [user, setUser] = useState({
        userLogin: {
            taiKhoan: '',
            matKhau: '',
        }, errors: {
            taiKhoan: '',
            matKhau: '',
        }
    });

    const useStyles = makeStyles(theme => ({
        textField: {
            width: 400,
            fontSize: 16,
        },
        button: {
            width: 200,
            height: 50,
            fontSize: 16,
        }
    }));

    const classes = useStyles();

    let handleChange = e => {
        let { name, value } = e.target;
        let errorMessage = '';
        if (value === "") {
            errorMessage = name + ' is required!';
        }
        //Kiểm tra lỗi 
        let userLoginUpdate = { ...user.userLogin, [name]: value };
        let errorsUpdate = { ...user.errors, [name]: errorMessage };
        setUser({
            userLogin: userLoginUpdate,
            errors: errorsUpdate
        });
        console.log(user);
    }
    let handleSubmit = e => {
        e.preventDefault();
        let valid = true;
        for (var errorName in user.errors) {
            if (user.errors[errorName] !== "") //1 trong các thuộc tính user.errors ! rỗng  
            {
                valid = false;
            }
        }
        for (let valueNotFind in user.userLogin) {
            if (user.userLogin[valueNotFind] === "") //2 trong các thuộc tính user.userLogin = rỗng 
            {
                valid = false;
            }
        }
        if (valid) {
            // console.log(props);
            props.dispatch(userLoginAction(user.userLogin, props.history));
            //khi submit gọi action truyền vào data là userLogin từ người dùng
            //  location.reload(true);
        } else {
            alert('Dữ liệu không hợp lệ!');
        }
    }

    return (
        <Container>
            <form className="container" onSubmit={handleSubmit} className={classesStyle.loginStyle} autoComplete="on">
                <div className="form-group card-block">
                    <div className="text-center">
                        <h2 className="text text-danger"><i className="fa fa-lock"></i> Sign In</h2>
                        {/* <hr className="mt-2 mb-2" /> */}
                    </div>
                    <div className="text-center">
                        <TextField variant="outlined" name="taiKhoan" label="Username" onChange={handleChange} className={classes.textField} margin="normal" />
                        <p className="text text-danger">{user.errors.taiKhoan}</p>
                    </div>
                    <div className="text-center">
                        <TextField variant="outlined" name="matKhau" label="Password" className={classes.textField} type="password" autoComplete="current-password" margin="normal" onChange={handleChange}
                        />
                        <p className="text text-danger">{user.errors.matKhau}</p>
                    </div>

                </div>
                <div className="form-group">
                    <div className="text-center">
                        <Button type="submit" color="secondary" variant="contained" className={classes.button}>Sign In</Button>
                    </div>
                </div>
            </form>
        </Container>
    )
}

export default connect(null)(Login);