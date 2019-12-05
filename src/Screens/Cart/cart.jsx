import React, { Component } from 'react';
import {connect} from 'react-redux';

 class Cart extends Component {
    render() {
        let {hinhAnh,tenKhoaHoc,moTa}=this.props.cartItem;
        console.log(this.props.cartItem);
        return (
            <div className="container">
                <h3>Course in Cart</h3>
                <div className="row">
                    <div className="col-8">
                <ul className="shoping">

                    <div className="item">
                         <li>
                            <div className="card p-2">
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
                                      <button className="btn btn-danger mt-3">Xóa</button>
                                 </div>
                                 </div>
                            </div>
                         </li>
                    </div>
                </ul>
                </div>
                <div className="col-4">

                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({cartItem:state.cartItem})

export default connect(mapStateToProps)(Cart);