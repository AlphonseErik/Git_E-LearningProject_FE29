import React, { Component } from 'react'

export default class FormNguoiDung extends Component {
    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <span>Tài khoản</span>
                    <input name="taiKhoan" className="form-control" />
                </div>
                <div className="form-group">
                    <span>mật Khẩu</span>
                    <input name="matKhau" className="form-control" />
                </div>
                <div className="form-group">
                    <span>Email</span>
                    <input name='email' />
                </div>
                <div className="form-group">
                    <button className="btn btn-success">Thêm khóa học</button>
                </div>
            </div>
        )
    }
}
