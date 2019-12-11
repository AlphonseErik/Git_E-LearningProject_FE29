import React from 'react';
import { connect } from 'react-redux';
import classes from './cartItem.module.scss';
import { DELETE_CART_ITEM } from '../../Redux/Action/actionType';

const CartItem = props => {

    let xoaCart = (maKhoaHoc) => {
        props.dispatch({
            type: DELETE_CART_ITEM,
            payload: maKhoaHoc
        })
    }
    let { hinhAnh, tenKhoaHoc, moTa, maKhoaHoc } = props.cartItem;
    
    return (
        <ul className={classes.shoping}>
            <div className={classes.item}>
                <li>
                    <div className="cart p-2">
                        <div className="row">
                            <div className="col-3">
                                <img src={hinhAnh} width={150} height={100} />
                            </div>
                            <div className="col-5">
                                <div className="pt-2">
                                    <h2> {tenKhoaHoc} </h2>
                                    <p>{moTa}</p>
                                </div>
                            </div>
                            <div className="col-2 pt-3" >
                            <button className="btn btn-danger " onClick={() => { xoaCart(maKhoaHoc) }}>X</button>
                            </div>
                            <div className="col-2 pt-3">
                                <h5 className="text-center">25$</h5>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        </ul>
    )
}

export default connect()(CartItem);