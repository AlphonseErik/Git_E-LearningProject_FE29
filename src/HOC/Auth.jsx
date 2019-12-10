import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { settings } from '../config/settings';

//props: path, component
class PrivateRoute extends Component {
    render() {
        const { path, Component } = this.props;
        return (
            <Route path={path} render={(routeProps) => {
<<<<<<< HEAD
                if (localStorage.getItem(settings.userLogin)){
                    // if(localStorage.getItem(settings.maLoaiNguoiDung)){
                    //     return <Component {...routeProps}/>
                    // }
=======
                if (localStorage.getItem(settings.userLogin)) {
>>>>>>> 75d8a539abdb1d1caffc10f01596f5c26991e7e8
                    return <Component {...routeProps} />
                }
                alert('Vui lòng Login');
                return <Redirect to="/login" />
            }} />
        )
    }
}

export default PrivateRoute;