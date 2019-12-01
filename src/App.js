import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Header from "./Layouts/Header/header";
import HomeScreen from "./Screens/Home/home";
import { restConnector } from "./Services";
import reduxAction from "./Redux/Action/action";
import { LOGIN, USER_INFO } from "./Redux/Action/actionType";
import UserProfile from "./Screens/UserProfile/userProfile";
import Login from "./Screens/Login/login";
import Signup from "./Screens/Signup/signup";
import PrivateRoute from "./HOC/Auth"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          {/* <HomeScreen /> */}
          <Route path="/home" exact component={HomeScreen} />
          <PrivateRoute path="/profile" Component={UserProfile} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />

          <Route path="/" exact component={HomeScreen} />
        </Switch>

      </BrowserRouter>

    )
  }

  componentDidMount() {
    const userLoginStr = localStorage.getItem('userLogin');
    const userAccessToken = localStorage.getItem('accessToken');
    const userDetailStr = localStorage.getItem('userDetail');
    if (userLoginStr && userAccessToken) {
      restConnector.defaults.headers['Authorization'] = "Bearer " + userAccessToken;

      this.props.dispatch(reduxAction(LOGIN, JSON.parse(userLoginStr)));
      this.props.dispatch(reduxAction(USER_INFO, JSON.parse(userDetailStr)));
    }
  }
}

export default connect()(App);
