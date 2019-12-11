import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import CartItem from '../../Components/CartItem/cartItem';
// import { courseRegisting } from '../../Redux/Action/userAction';
// import { settings } from '../../config/settings';
import Payment from './Payment/payment';

function Cart(props) {

    let renderCard = () => {
        return props.cartItem.map((sanpham, index) => {
            // console.log(sanpham.hinhAnh, sanpham.maKhoaHoc);
            return (
                <CartItem key={index} cartItem={sanpham} />
            )
        })
    }

    let renderPayment = () => {
        return props.cartItem.map((sanpham, index) => {
            // console.log(sanpham.hinhAnh, sanpham.maKhoaHoc);
            return (
                <Payment key={index} cartItem={sanpham} />
            )
        })
    }

    return (
        <div className="container">
            <h3>Course in Cart</h3>
            <div className="row">
                <div className="col-8">
                    {renderCard()}
                </div>
                <div className="col-4">
                    {renderPayment()}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItem: state.cartItem
});

export default connect(mapStateToProps)(Cart);