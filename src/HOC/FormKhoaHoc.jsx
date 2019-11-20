import React, { Component } from 'react'

export default class FormKhoaHoc extends Component {
    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <span>Mã KH</span>
                    <input name="maKhoaHoc" className="form-control" />
                </div>
                <div className="form-group">
                    <span>Tên KH</span>
                    <input name="tenKhoaHoc" className="form-control" />
                </div>
                <div className="form-group">
                    <span>Mô tả</span>
                    <textarea className='form-control'></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-success">Thêm khóa học</button>
                </div>
            </div>
        )
    }
}
