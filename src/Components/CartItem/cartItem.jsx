import React from 'react';
import { connect } from 'react-redux';
import classes from './cartItem.module.scss';
import { DELETE_CART_ITEM } from '../../Redux/Action/actionType';
import Payment from '../Payment/payment';


const CartItem = props => {

    let xoaCart = (maKhoaHoc) => {
        props.dispatch({
            type: DELETE_CART_ITEM,
            payload: maKhoaHoc
        })
    }

    let { hinhAnh, tenKhoaHoc, moTa, maKhoaHoc } = props.cartItem;

    return (
        <div className="row">
            <div className="col-8">
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
                                        <button className="btn" onClick={() => { xoaCart(maKhoaHoc) }}><i className="fa fa-times pt-2 "></i></button>
                                    </div>
                                    <div className="col-2 pt-3">
                                        <h5 className="text-center pt-3">25$</h5>
                                     </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
            <div className="col-4">
                <Payment item={maKhoaHoc} />
            </div>
        </div>
    )
}

export default connect()(CartItem);