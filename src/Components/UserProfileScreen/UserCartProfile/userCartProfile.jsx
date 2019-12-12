import React from "react";
import UserCartItem from "../UserCartProfileItem/userCartProfileItem";
import { settings } from "../../../config/settings";
import { connect } from "react-redux";

const UserCart = props => {

    const userLocalStorage = JSON.parse(localStorage.getItem(settings.userProfile));

    const { chiTietKhoaHocGhiDanh } = userLocalStorage;

    // const

    return (
        <div className="container">
            <div className="row">
                <h4 className="text-center">User Cart Item Has Register</h4>
                <div className="col-7">
                    <UserCartItem item={chiTietKhoaHocGhiDanh} />
                </div>
                <div className="col-5">

                </div>
            </div>
        </div>
    )
}

export default connect()(UserCart);