import React, { useEffect } from 'react'
import { settings } from '../../config/settings';
import { courseRegisting } from '../../Redux/Action/userAction';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import classes from './payment.module.scss';

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
        if (props.isLogin) {
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
        <div className={classes.pay}>
        <div className="container">
            
            <div>
                <h3>Total: 50$</h3>
            </div>
            <div>
                {state.isBoolean ? <button className="btn btn-danger" onClick={renderButton}>Checkout</button> : <button className="btn btn-success">Please waiting for enrollment</button>}
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isLogin: state.user.isLogin,
})

export default connect(mapStateToProps)(Payment);
