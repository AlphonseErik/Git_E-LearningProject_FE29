import React, { useEffect } from "react";
import CourseService from "../../Services/courseService";
import {connect} from "react-redux";

const courseService = new CourseService();

const UserProfile = props => {

    // useEffect(() => {
    //     courseService.fetchCourse()
    //         .then(res => {
    //             props.dispatch({
    //                 type: "FETCH_COURSE",
    //                 payload: res.data,
    //             }, console.log(res.data));
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }, [[props.credentials]]);

    const userProfile = JSON.parse(localStorage.getItem("userLogin"));
    console.log(userProfile);
    const { hoTen, soDT, taiKhoan, email } = userProfile
    console.log({ hoTen });

    return (
        <div className="container">
            <h3 className="text text-danger">Your Profile</h3>
            <div className="form-group">
                <span>Username</span>
                <input name="taiKhoan" className="form-control"/>{taiKhoan}
            </div>
            <div className="form-group">
                <span>Full Name</span>
                <input name="hoTen" className="form-control"/>{hoTen}
            </div>
            <div className="form-group">
                <span>Telephone Number</span>
                <input name="soDT" className="form-control"/>{soDT}
            </div>
            <div className="form-group">
                <span>Email</span>
                <input name="email" className="form-control"/>{email}
            </div>
            <div className="form-group">
                <button className="btn btn-success">Edit</button>
            </div>
        </div>
    )
}

// const mapStateToProps = state => ({
//     courseList: state.courseList,
//     credentials: state.user.credentials
// });

export default connect()(UserProfile);