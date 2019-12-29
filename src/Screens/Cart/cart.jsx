import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import CartItem from '../../Components/CartItem/cartItem';

function Cart(props) {

    let renderCard = () => {
        return props.cartItem.map((sanpham, index) => {
            return (
                <CartItem key={index} cartItem={sanpham} />
            )
        })
    }

    return (
        <div className="container-fluid">
            <h3>Course in Cart</h3>
            {renderCard()}
        </div>
    )
}

const mapStateToProps = state => ({
    cartItem: state.cartItem
});

export default connect(mapStateToProps)(Cart);