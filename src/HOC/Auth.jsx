import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { settings } from '../config/settings';
import PrivateAdminRoute from './AdminAuth';

//props: path, component
class PrivateRoute extends Component {
    render() {
        const { path, Component } = this.props;
        return (
            <Route path={path} render={(routeProps) => {
                if (localStorage.getItem(settings.userLogin)){
                    // if(localStorage.getItem(settings.maLoaiNguoiDung === "GV")){
                    //     return <PrivateAdminRoute {...routeProps}/>
                    // }
                    return <Component {...routeProps} />
                }
                alert('Vui lòng Login');
                return <Redirect to="/login" />
            }} />
        )
        }
}

export default PrivateRoute;