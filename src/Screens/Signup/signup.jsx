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
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            width: 460,
        },
        button: {
            margin: theme.spacing(2),
            marginLeft: 340,
        },
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
                <h3 className="modal-title text-danger">Sign Up</h3>
                <TextField
                    name="taiKhoan"
                    label="Username"
                    className={classes.textField}
                    margin="normal"
                    onChange={handleChange}
                />
                <p className="text text-danger">{user.errors.taiKhoan}</p>
                <TextField
                    name="matKhau"
                    label="Password"
                    className={classes.textField}
                    margin="normal"
                    onChange={handleChange}
                />
                <p className="text text-danger">{user.errors.matKhau}</p>
                <TextField
                    name="hoTen"
                    label="Full Name"
                    className={classes.textField}
                    margin="normal"
                    onChange={handleChange}
                />
                <p className="text text-danger">{user.errors.hoTen}</p>
                <TextField
                    name="email"
                    label="Email"
                    className={classes.textField}
                    margin="normal"
                    onChange={handleChange}
                />
                <p className="text text-danger">{user.errors.email}</p>
                <TextField
                    name="soDT"
                    label="Telephone Number"
                    className={classes.textField}
                    margin="normal"
                    onChange={handleChange}
                />
                <p className="text text-danger">{user.errors.soDT}</p>
            </div>
            <div className="form-group">
                <Button color="secondary" variant="contained" type="submit" className={classes.button}>Sign Up</Button>
            </div>
        </form>

    )
}

export default connect(null)(Signup);