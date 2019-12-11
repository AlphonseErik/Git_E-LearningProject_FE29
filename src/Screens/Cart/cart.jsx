import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import CartItem from '../../Components/CartItem/cartItem';
import { courseRegisting } from '../../Redux/Action/userAction';
import { settings } from '../../config/settings';

function Cart(props) {

    let renderCard = () => {
        return props.cartItem.map((sanpham, index) => {
            console.log(sanpham.hinhAnh, sanpham.maKhoaHoc);
            return (
                <CartItem key={index} cartItem={sanpham} />
            )
        })
    }

    const userCourseRegister = props.cartItem;

    const { maKhoaHoc, tenKhoaHoc } = JSON.stringify(userCourseRegister);

    console.log(maKhoaHoc);

    const userLocalStorage = localStorage.getItem(settings.taiKhoan);

    const { taiKhoan } = userLocalStorage;

    let [state, setState] = React.useState({
        userRegisterCourse: {
            taiKhoan: taiKhoan,
            maKhoaHoc: props.cartItem.maKhoaHoc,
        },
        isBoolean: true,

    })

    let renderButton = () => {
        setState({
            isBoolean: false
        })
        courseRegisting()
    }

    return (
        <div className="container">
            <h3>Course in Cart</h3>
            <div className="row">
                <div className="col-8">
                    {renderCard()}
                </div>
                <div className="col-4">
                    <div>
                        <h3>Total: 50$</h3>
                    </div>
                    <div>
                        {state.isBoolean ? <button className="btn btn-danger" onClick={renderButton}>Thanh Toán</button> : <button className="btn btn-success">Đang chờ ghi danh</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItem: state.cartItem
});

export default connect(mapStateToProps)(Cart);