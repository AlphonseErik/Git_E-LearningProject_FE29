import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import classesStyle from "../Signup/signupStyle.module.scss"
import { userSignupAction } from "../../Redux/Action/userAction";

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';

function Signup(props) {

    const useStylesPw = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: 200,
        },
    }));

    const [user, setUser] = useState({
        userSignup: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDT: '',
            maLoaiNguoiDung: 'HV',
            maNhom: 'GP01',
            email: '',
        }, errors: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDT: '',
            // maLoaiNguoiDung: 'HV',
            // maNhom: 'GP01',
            email: '',
        },
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setUser({ ...user, showPassword: !user.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const useStyles = makeStyles(theme => ({
        textField: {
            width: 400,
            fontSize: 16,
        },
        button: {
            width: 200,
            height: 50,
            fontSize: 16,
            borderRadius:25
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
        for (let errorName in user.errors) {
            if (user.errors[errorName] !== "") //1 trong các thuộc tính user.errors ! rỗng  
            {
                valid = false;
            }
        }
        for (let valueNotFind in user.userSignup) {
            if (user.userSignup[valueNotFind] === "") //2 trong các thuộc tính user.userLogin = rỗng 
            {
                valid = false;
            }
        }
        if (valid) {
            props.dispatch(userSignupAction(user.userSignup, props.history)); //khi submit gọi action truyền vào data là userLogin từ người dùng
        } else {
            alert('Dữ liệu không hợp lệ!');
        }
    }

    return (
        <div className={classesStyle.tong}>
        <form className="container" onSubmit={handleSubmit} className={classesStyle.signupStyle}>
            <div className="form-group">
                <h2 className="text-danger text-center">Sign Up</h2>
                <div className="text-center">
                    <TextField variant="outlined" name="taiKhoan" label="Username" className={classes.textField} margin="normal" onChange={handleChange} />
                    <p className="text text-danger">{user.errors.taiKhoan}</p>
                </div>
                <div className="text-center">
                    {/* <TextField variant="outlined" name="matKhau" label="Password" className={classes.textField} margin="normal" onChange={handleChange} />
                    <p className="text text-danger">{user.errors.matKhau}</p> */}
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            name="matKhau"
                            onChange={handleChange}
                            type={user.showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end">
                                        {user.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
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
                {/* <div className="text-center">
                    <TextField variant="outlined" name="maNhom" label="Group Code" className={classes.textField} margin="normal" onChange={handleChange} />
                    <p className="text text-danger">{user.errors.soDT}</p>
                </div> */}
            </div>
            <div className="form-group">
                <div className="text-center">
                    <Button color="secondary" variant="contained" type="submit" className={classes.button}>Sign Up</Button>
                </div>
            </div>
        </form>
        </div>

    )
}

export default connect(null)(Signup);