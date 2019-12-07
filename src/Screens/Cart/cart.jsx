import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../../Components/CartItem/cartItem';

const Cart = props => {
    const renderCard = () => {
        console.log("item", props.cartItem);
        return props.cartItem.map((sanpham, index) => {
            console.log(sanpham.hinhAnh, sanpham.maKhoaHoc);
            return (
                <CartItem key={index} cartItem={sanpham} />
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
                    <div>
                        <h3>Total:</h3>
                    </div>
                    <div>
                        <button className="btn btn-danger">Thanh Toán</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ cartItem: state.cartItem });

export default connect(mapStateToProps)(Cart);