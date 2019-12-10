import React, { Component,useState } from 'react';
import { connect } from 'react-redux';
import CartItem from '../../Components/CartItem/cartItem';
import {courseRegisting} from '../../Redux/Action/userAction';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state={
          isboolean:true
        }
    }
    renderButton =()=>{
        this.setState({
           isboolean:false
        })
         courseRegisting()
       }


       renderCard = () => {
        return this.props.cartItem.map((sanpham, index) => {
            console.log(sanpham.hinhAnh, sanpham.maKhoaHoc);
            return (
                <CartItem key={index} cartItem={sanpham} />
            )
        })
    }
    
 render(){

    


    return (
        <div className="container">
            <h3>Course in Cart</h3>
            <div className="row">
                <div className="col-8">
                    {this.renderCard()}
                </div>
                <div className="col-4">
                    <div>
                        <h3>Total: 50$</h3>
                    </div>
                    <div>
                     {this.state.isboolean ? <button className="btn btn-danger" onClick={()=>this.renderButton()}>Thanh Toán</button>:<button className="btn btn-success">Đang chờ ghi danh</button> }
                    </div>
                </div>
            </div>
        </div>
    )
}
}

const mapStateToProps = state => ({ cartItem: state.cartItem });

export default connect(mapStateToProps)(Cart);