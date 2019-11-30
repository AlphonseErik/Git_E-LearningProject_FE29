import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { userUpdateAction, userLoginAction, userDetail } from "../../Redux/Action/userAction";
import UserService from "../../Services/userService";
import { GET_USER_INFO } from "../../Redux/Action/actionType";

// const userService = new UserService();

const UserProfile = props => {
    let accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    let userName = localStorage.getItem("taiKhoan");

    useEffect(() => {
        props.dispatch(userDetail(accessToken, userName));
    });

    const userLocalStorage = JSON.parse(localStorage.getItem("userLogin"));

    const { taiKhoan, hoTen, soDT, email } = userLocalStorage;

    let [user, setUserProfile] = useState({
        userProfile: {
            taiKhoan: taiKhoan,
            matKhau: '',
            hoTen: hoTen,
            soDT: soDT,
            maLoaiNguoiDung: 'HV',
            maNhom: 'GP01',
            email: email,
        }, errors: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDT: '',
            maLoaiNguoiDung: 'HV',
            maNhom: 'GP01',
            email: '',
        }
    });

    let handleChange = e => {
        let { name, value } = e.target;
        let errorMessage = '';
        if (value === "") {
            errorMessage = name + ' is required!';
        }
        //Kiểm tra lỗi 
        let userProfileUpdate = { ...user.userProfile, [name]: value };
        let errorsUpdate = { ...user.errors, [name]: errorMessage };
        setUserProfile({
            userProfile: userProfileUpdate,
            errors: errorsUpdate
        });
        console.log(user);
    }

    const updateUser = e => {
        e.preventDefault();
        //update
        props.dispatch(userUpdateAction(user.userProfile, props.history));
    }

    return (
        <form onSubmit={updateUser}>
            <div className="container">
                <h3 className="text text-danger">Your Profile</h3>
                <div className="form-group">
                    <span>Username</span>
                    <input name="taiKhoan" className="form-control" value={taiKhoan} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <span>Full Name</span>
                    <input name="hoTen" className="form-control" value={user.userProfile.hoTen} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <span>Telephone Number</span>
                    <input name="soDT" className="form-control" value={user.userProfile.soDT} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <span>Email</span>
                    <input name="email" className="form-control" value={user.userProfile.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <span>Password</span>
                    <input name="matKhau" className="form-control" value={user.userProfile.matKhau} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <button className="btn btn-success" type="submit">Edit</button>
                </div>
            </div>


        </form>
    )
}

const mapStateToProps = state => ({
    updatingUser: state.updatingUser,
    credentials: state.user.credentials,
});

export default connect(mapStateToProps)(UserProfile);