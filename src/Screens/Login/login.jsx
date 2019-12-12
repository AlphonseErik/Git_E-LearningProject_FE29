import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { userLoginAction, userDetail } from "../../Redux/Action/userAction";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import classesStyle from "../Login/loginStyle.module.scss";
import { Container } from "@material-ui/core";
import { settings } from "../../config/settings";

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';

function Login(props) {

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

    let [user, setUser] = React.useState({
        userLogin: {
            taiKhoan: '',
            matKhau: '',
        }, errors: {
            taiKhoan: '',
            matKhau: '',
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
        }
    }));

    const classes = useStyles();

    const handleChange = e => {
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

    const handleSubmit = e => {
        e.preventDefault();
        let valid = true;
        for (let errorName in user.errors) {
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
            props.dispatch(userLoginAction(user.userLogin, props.history));
        } else {
            alert('Please check your Email and Password');
        }
    }

    return (
        <Container>
            <form className="container" onSubmit={handleSubmit} className={classesStyle.loginStyle} autoComplete="on">
                <div className="form-group card-block">
                    <div className="text-center">
                        <h2 className="text text-danger"><i className="fa fa-lock"></i> Sign In</h2>
                    </div>
                    <div className="text-center">
                        <TextField variant="outlined" name="taiKhoan" label="Username" onChange={handleChange} className={classes.textField} margin="normal" />
                        <p className="text text-danger">{user.errors.taiKhoan}</p>
                    </div>
                    <div className="text-center">
                        {/* <TextField variant="outlined" name="matKhau" label="Password" className={classes.textField} type="password" autoComplete="current-password" margin="normal" onChange={handleChange}
                        />
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

// const mapStateToProp = state => ({
//     credentials: state.user.credentials,
// });

export default connect()(Login);