import React, { useState } from "react";
import { connect } from "react-redux";

const Signup = () => {

    let handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <li className="nav-item active">
            <a className="nav-link" data-toggle="modal" data-target="#modelIdSignup">Sign Up</a>

            <div className="modal fade" id="modelIdSignup" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-dark">Signup</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form className="container">
                        <div className="form-group">
                            <span>Tài Khoản</span>
                            <input name="taiKhoan" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Mật Khẩu</label>
                            <input name="matKhau" type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Họ Tên </label>
                            <input name="hoTen" type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Số ĐT</label>
                            <input name="soDT" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success" type="submit">Đăng Ký</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </li>

        

    )
}

export default Signup;