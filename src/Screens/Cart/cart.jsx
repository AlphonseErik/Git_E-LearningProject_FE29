import React, { Component } from 'react';
import {connect} from 'react-redux';
import CartItem from '../../Components/CartItem/cartItem';

 class Cart extends Component {
     renderCard =()=>{
           
            console.log("item",this.props.cartItem);
            return this.props.cartItem.map((sanpham,index)=>{
             console.log(sanpham.hinhAnh,sanpham.maKhoaHoc);   
             return (
                  <CartItem key={index} cartItem={sanpham}/>
             )
            })
         }
     
    render() {

        return (
            <div className="container">
                <h3>Course in Cart</h3>
                <div className="row">
                    <div className="col-8">
                        {this.renderCard()}
                </div>
                <div className="col-4">
                    <div>
                      <h3>ToTal:</h3>

                    </div>
                    <div>
                       <button className="btn btn-danger">Thanh Toán</button> 
                    </div>

                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({cartItem:state.cartItem})

export default connect(mapStateToProps)(Cart);