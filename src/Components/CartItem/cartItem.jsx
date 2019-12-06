import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './cartItem.module.scss';

 function CartItem (props) {
     
     let XoaCart =(maKhoaHoc)=>{
         props.dispatch({
             type:"DELETE_CART",
             payload:maKhoaHoc
         })
     }
    let {hinhAnh,tenKhoaHoc,moTa,maKhoaHoc}=props.cartItem;
    return (
        <ul className={classes.shoping}>
        <div className={classes.item}>
            <li>
                <div className="cart p-2">
                <div className="row">
                   <div className="col-3">
                       <img src={hinhAnh} width={150} height={100}/>
                    </div>
                    <div className="col-7">
                        <div className="pt-2"> 
                           <h2> {tenKhoaHoc} </h2>
                             <p>{moTa}</p>
                        </div>
                    </div>
                    <div className="col-2">
                         <button className="btn btn-danger mt-3" onClick={()=>{XoaCart(maKhoaHoc)}}>Xóa</button>
                    </div>
                    </div>
                </div>
            </li>
        </div>
    </ul>
    )
}

export default connect()(CartItem);