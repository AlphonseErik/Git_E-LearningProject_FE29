import React, { useState } from "react";
import { connect } from "react-redux";
import { userLoginAction } from "../../Redux/Action/userAction";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import classesStyle from "../Login/signinStyle.module.scss";

const Login = (props) => {
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
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            width: 450,
        },
        button: {
            margin: theme.spacing(2),
            marginLeft: 390,
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
        for (var valueNotFind in user.userLogin) {
            if (user.userLogin[valueNotFind] === "") //2 trong các thuộc tính user.userLogin = rỗng 
            {
                valid = false;
            }
        }
        if (valid) {
            props.dispatch(userLoginAction(user.userLogin, props.history)); //khi submit gọi action truyền vào data là userLogin từ người dùng
        } else {
            alert('Dữ liệu không hợp lệ!');
        }
    }

    return (
        <li className="nav-item active">
            <a className="nav-link" data-toggle="modal" data-target="#modelIdLogin">Sign In</a>
            <div className="modal fade" id="modelIdLogin" role="dialog" aria-labelledby="modelTitleId">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <form className="container" onSubmit={handleSubmit} className={classesStyle.loginStyle}>
                            <div className="form-group">
                                <h3 className="text text-danger">Sign In</h3>
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
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    onChange={handleChange}
                                />
                                <p className="text text-danger">{user.errors.matKhau}</p>
                            </div>
                            <div className="form-group">
                                <Button type="submit" variant="contained" color="secondary" className={classes.button}>Sign In</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </li>

    )
}

export default connect(null)(Login);