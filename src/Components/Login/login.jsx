import React, { useState } from "react";
import { connect } from "react-redux";
import { userLoginAction } from "../../Redux/Action/userAction";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';

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
          width: 480,
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
            <a className="nav-link" data-toggle="modal" data-target="#modelIdLogin">Login</a>
            <div className="modal fade" id="modelIdLogin" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <form className="container" onSubmit={handleSubmit} >
                            <div className="form-group">
                                <span>Username</span>
                                <TextField name="taiKhoan" className="form-control" onChange={handleChange} />
                                <span className="text text-danger">{user.errors.taiKhoan}</span>
                            </div>
                            <div className="form-group">
                                <span>Password</span>
                                <TextField name="matKhau" className="form-control" onChange={handleChange} />
                                <span className="text text-danger">{user.errors.matKhau}</span>
                            </div>
                            <div className="form-group">
                                <Button type="submit" variant="contained" color="secondary">Login</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </li>

    )
}

export default connect(null)(Login);