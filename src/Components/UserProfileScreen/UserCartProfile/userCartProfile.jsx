import React from "react";
import UserCartItem from "../UserCartProfileItem/userCartProfileItem";
import { settings } from "../../../config/settings";
import { connect } from "react-redux";

function UserCart(props) {

    // const userLocalStorage = JSON.parse(localStorage.getItem(settings.userProfile));

    const { chiTietKhoaHocGhiDanh } = props.item;

    // console.log(chiTietKhoaHocGhiDanh);

    let renderCard = () => {
        return (
            <UserCartItem item={chiTietKhoaHocGhiDanh} />
        )
    }

    return (
        <div>
            <div className="row">
                <div className="col-11">
                    <h4 className="text-center">User Course Register</h4>
                    {renderCard()}
                </div>
                <div className="col-1">

                </div>
            </div>
        </div>
    )
}

export default connect()(UserCart);