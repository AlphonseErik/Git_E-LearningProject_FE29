import React from "react";

const UserProfile = props => {

    const userProfile = JSON.parse(localStorage.getItem("userLogin"));
    console.log(userProfile);
    const { hoTen, soDT, taiKhoan, email } = userProfile
    console.log({ hoTen });

    let handleChange = e => {
        let { name, value } = e.target;
        let errorMessage = '';
        if (value === "") {
            errorMessage = name + ' is required!';
        }
        //Kiểm tra lỗi 
        // let userLoginUpdate = { ...user.userLogin, [name]: value };
        // let errorsUpdate = { ...user.errors, [name]: errorMessage };
        // setUser({
        //     userLogin: userLoginUpdate,
        //     errors: errorsUpdate
        // });
        // console.log(user);
    }

    return (
        <div className="container">
            <h3 className="text text-danger">Your Profile</h3>
            <div className="form-group">
                <span>Username</span>
                <input name="taiKhoan" className="form-control" onChange={handleChange} value={taiKhoan} />
            </div>
            <div className="form-group">
                <span>Full Name</span>
                <input name="hoTen" className="form-control" onChange={handleChange} value={hoTen} />
            </div>
            <div className="form-group">
                <span>Telephone Number</span>
                <input name="soDT" className="form-control" onChange={handleChange} value={soDT} />
            </div>
            <div className="form-group">
                <span>Email</span>
                <input name="email" className="form-control" onChange={handleChange} value={email} />
            </div>
            <div className="form-group">
                <button className="btn btn-success">Edit</button>
            </div>
        </div>
    )
}

export default UserProfile;