import React, { Component } from 'react';
import { connect } from 'react-redux';

const CartItem = props => {
    console.log("render gio hang", props.cartItem);
    return (
        <div>
            aksnkansak
        </div>
    )
}
const mapStateToProps = state => ({ cartItem: state.cartItemReducer });
export default connect(mapStateToProps)(CartItem);
