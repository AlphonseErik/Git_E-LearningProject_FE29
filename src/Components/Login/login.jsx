import React from "react";
import { connect } from "react-redux";

const Login = () => {
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
                        <form className="container">
                            <div className="form-group">
                                <span>Tài khoản</span>
                                <input name="taiKhoan" className="form-control"/>
                                <span className="text text-danger"></span>
                            </div>
                            <div className="form-group">
                                <span>Mật khẩu</span>
                                <input name="matKhau" className="form-control"/>
                                <span className="text text-danger"></span>
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