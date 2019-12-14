import React, { Component } from 'react'
import classes from './SaleItemStyle.module.scss';

export default class SaleItem extends Component {

    render() {
        let { hinhAnh, tenKhoaHoc, luotXem, moTa, soLuongHocVien, ngayTao } = this.props.item;



        return (
            <div className="card">
                <img className="card-img-top" src="holder.js/100x180/" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>

        );
    }
}
