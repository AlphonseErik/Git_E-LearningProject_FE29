import React, { useEffect } from 'react'
import { settings } from '../../config/settings';
import { courseRegisting } from '../../Redux/Action/userAction';
import { connect } from "react-redux";

const Payment = props => {

    let maKhoaHoc = props.item;
    // console.log(maKhoaHoc)

    let [state, setState] = React.useState({
        userRegisterCourse: {
            maKhoaHoc: maKhoaHoc,
            taiKhoan: localStorage.getItem(settings.taiKhoan),
        },
        isBoolean: true,

    })

    let renderButton = () => {
        const userLoginStr = localStorage.getItem('userLogin');
        if (userLoginStr) {
            setState({
                isBoolean: false,
            });
            console.log(state.userRegisterCourse);
            props.dispatch(courseRegisting(state.userRegisterCourse, props.history));
        } else {
            alert('You Have To Login First!!');
        }

    }

    return (
        <div className="container">
            <div>
                <h3>Total: 50$</h3>
            </div>
            <div>
                {state.isBoolean ? <button className="btn btn-danger" onClick={renderButton}>Checkout</button> : <button className="btn btn-success">Please waiting for enrollment</button>}
            </div>
        </div>
    )
}

export default connect()(Payment);
