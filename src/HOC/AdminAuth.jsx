import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { settings } from '../config/settings';

//props: path, component
class PrivateAdminRoute extends Component {
    render() {
        const { path, Component } = this.props;
        return (
            <Route path={path} render={(routeProps) => {
                if (localStorage.getItem(settings.userLogin) && localStorage.getItem(settings.maLoaiNguoiDung) === "GV") {
                    return <Component {...routeProps} />
                }
                return <Redirect to="/home" />
            }} />
        )
    }
}

export default PrivateAdminRoute;