import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Signup = () => {

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

    let handleChange = (e) => {
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
            errors: errorsUpdate
        });
        console.log(user);
    };

    useEffect(() => {
        
    }, [handleChange])

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
                                <input name="taiKhoan" type="text" className="form-control" onChange={handleChange} />
                                <span className="text text-danger">{user.errors.taiKhoan}</span>
                            </div>
                            <div className="form-group">
                                <label>Mật Khẩu</label>
                                <input name="matKhau" type="password" className="form-control" onChange={handleChange} />
                                <span className="text text-danger">{user.errors.matKhau}</span>
                            </div>
                            <div className="form-group">
                                <label>Họ Tên </label>
                                <input name="hoTen" type="email" className="form-control" onChange={handleChange} />
                                <span className="text text-danger">{user.errors.hoTen}</span>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input name="email" type="email" className="form-control" onChange={handleChange} />
                                <span className="text text-danger">{user.errors.email}</span>
                            </div>
                            <div className="form-group">
                                <label>Số ĐT</label>
                                <input name="soDT" type="text" className="form-control" onChange={handleChange} />
                                <span className="text text-danger">{user.errors.soDT}</span>
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

export default connect()(Signup);