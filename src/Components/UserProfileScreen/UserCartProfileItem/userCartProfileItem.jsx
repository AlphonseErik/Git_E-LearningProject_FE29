import React from "react";
import { connect } from "react-redux";

const UserCartItem = props => {

    console.log(props.item);
    const [{ maKhoaHoc, tenKhoaHoc }] = props.item;

    return (
        <div className="container">
            <h5>{tenKhoaHoc}</h5>
        </div>
    )
}

export default connect()(UserCartItem);