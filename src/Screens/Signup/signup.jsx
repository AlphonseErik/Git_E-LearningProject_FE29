import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import classesStyle from "../Signup/signupStyle.module.scss"

const Signup = props => {

    const [user, setUser] = useState({
        userSignup: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDT: '',
            maLoaiNguoiDung: 'HV',
            maNhom: 'GP01'
        }, errors: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDT: '',
            maLoaiNguoiDung: 'HV',
            maNhom: 'GP01'
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
        let userSignupUpdate = { ...user.userSignup, [name]: value };
        let errorsUpdate = { ...user.errors, [name]: errorMessage };
        setUser({
            userSignup: userSignupUpdate,
            errors: errorsUpdate,
        });
        console.log(user);
    };

    let handleSubmit = e => {
        e.preventDefault();
        let valid = true;
        for (var errorName in user.errors) {
            if (user.errors[errorName] !== "") //1 trong các thuộc tính user.errors ! rỗng  
            {
                valid = false;
            }
        }
        for (var valueNotFind in user.userLogin) {
            if (user.userSignup[valueNotFind] === "") //2 trong các thuộc tính user.userLogin = rỗng 
            {
                valid = false;
            }
        }
        if (valid) {
            props.dispatch(); //khi submit gọi action truyền vào data là userLogin từ người dùng
        } else {
            alert('Dữ liệu không hợp lệ!');
        }
    }

    return (
        <form className="container" onSubmit={handleSubmit} className={classesStyle.signupStyle}>
            <div className="form-group">
                <h2 className="text-danger text-center">Sign Up</h2>
                <div className="text-center">
                    <TextField variant="outlined" name="taiKhoan" label="Username" className={classes.textField} margin="normal" onChange={handleChange} />
                    <p className="text text-danger">{user.errors.taiKhoan}</p>
                </div>
                <div className="text-center">
                    <TextField variant="outlined" name="matKhau" label="Password" className={classes.textField} margin="normal" onChange={handleChange} />
                    <p className="text text-danger">{user.errors.matKhau}</p>
                </div>
                <div className="text-center">
                    <TextField variant="outlined" name="hoTen" label="Full Name" className={classes.textField} margin="normal" onChange={handleChange} />
                    <p className="text text-danger">{user.errors.hoTen}</p>
                </div>
                <div className="text-center">
                    <TextField variant="outlined" name="email" label="Email" className={classes.textField} margin="normal" onChange={handleChange} />
                    <p className="text text-danger">{user.errors.email}</p>
                </div>
                <div className="text-center">
                    <TextField variant="outlined" name="soDT" label="Telephone Number" className={classes.textField} margin="normal" onChange={handleChange} />
                    <p className="text text-danger">{user.errors.soDT}</p>
                </div>
            </div>
            <div className="form-group">
                <div className="text-center">
                    <Button color="secondary" variant="contained" type="submit" className={classes.button}>Sign Up</Button>
                </div>
            </div>
        </form>

    )
}

export default connect(null)(Signup);