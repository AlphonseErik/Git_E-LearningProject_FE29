import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { userUpdateAction } from "../../Redux/Action/userAction";

const UserProfile = props => {
    const userocalStorage = JSON.parse(localStorage.getItem("userLogin"));

    let [userProfile, setUserProfile] = useState({
        userProfile: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDT: '',
            maLoaiNguoiDung: '',
            maNhom: '',
            email: '',
        }, errors: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDT: '',
            maLoaiNguoiDung: '',
            maNhom: '',
            email: '',
        }
    });

    const updateUser = e => {
        e.preventDefault();
        props.dispatch(userUpdateAction(props.userProfile, props.history));
    }

    return (
        <form onSubmit={updateUser}>
            <div className="container">
                <h3 className="text text-danger">Your Profile</h3>
                <div className="form-group">
                    <span>Username</span>
                    <input name="taiKhoan" className="form-control" />
                </div>
                <div className="form-group">
                    <span>Full Name</span>
                    <input name="hoTen" className="form-control" />
                </div>
                <div className="form-group">
                    <span>Telephone Number</span>
                    <input name="soDT" className="form-control" />
                </div>
                <div className="form-group">
                    <span>Email</span>
                    <input name="email" className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-success" type="submit">Edit</button>
                </div>
            </div>
        </form>
    )
}

// const mapStateToProps = state => ({
//     courseList: state.courseList,
//     credentials: state.user.credentials
// });

export default connect()(UserProfile);