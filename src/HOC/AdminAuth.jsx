import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { settings } from '../config/settings';

//props: path, component
class PrivateAdminRoute extends Component {
    render() {
        const { path, Component } = this.props;
        return (
            <Route path={path} render={(routeProps) => {
                const userLoginStr = localStorage.getItem('userLogin');
                const userAccessToken = localStorage.getItem('accessToken');
                const userRightStr = localStorage.getItem('userRight');
                if (userLoginStr && userAccessToken && userRightStr === "GV") {
                    return <Component {...routeProps} />
                }
                return <Redirect to="/home" />
            }} />
        )
    }
}

export default PrivateAdminRoute;