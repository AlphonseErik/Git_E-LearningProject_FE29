import React, { useState } from "react";
import { connect } from "react-redux";

const Login = () => {

    let [state, setUser] = useState({
        userLogin: {
            taiKhoan: '',
            matKhau: '',
        },errors: {
            taiKhoan: '',
            matKhau: '',
        }
    });

    let handleChange = (e) => {
        let { name, value } = e.target;
        let errorMessage = '';
        if (value === "") {
            errorMessage = name + ' is required!';
        }
        //Kiểm tra lỗi 
        let userLoginUpdate = { ...state.userLogin, [name]: value };
        let errorsUpdate = { ...state.errors, [name]: errorMessage };
        setUser({
            userLogin: userLoginUpdate,
            errors: errorsUpdate
        });
        console.log(state);
    }
      let onSubmit =(e)=>{
       e.preventDefault();
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
                        <form className="container" onSubmit={onSubmit}>
                            <div className="form-group">
                                <span>Tài khoản</span>
                                <input name="taiKhoan" className="form-control" onChange={handleChange} />
                                <span className="text text-danger">{state.errors.taiKhoan}</span>
                            </div>
                            <div className="form-group">
                                <span>Mật khẩu</span>
                                <input name="matKhau" className="form-control" onChange={handleChange} />
                                <span className="text text-danger">{state.errors.matKhau}</span>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </li>

    )
}

export default connect()(Login);