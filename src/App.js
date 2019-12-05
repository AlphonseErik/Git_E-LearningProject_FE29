import React, { Component, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Header from "./Layouts/Header/header";
import HomeScreen from "./Screens/Home/home";
import { restConnector } from "./Services";
import reduxAction from "./Redux/Action/action";
import { LOGIN, USER_INFO } from "./Redux/Action/actionType";
import UserProfile from "./Screens/UserScreen/UserProfile/userProfile";
import Login from "./Screens/Login/login";
import Signup from "./Screens/Signup/signup";
import PrivateRoute from "./HOC/Auth"
import UserScreen from "./Screens/UserScreen/userScreen";
import Notfound from "./Screens/NotFound/notFound";
import CartItem from "./Components/CartItem/cartItem";
import Cart from "./Screens/Cart/cart";

const App = props => {

  useEffect(() => {
    const userLoginStr = localStorage.getItem('userLogin');
    const userAccessToken = localStorage.getItem('accessToken');
    const userDetailStr = localStorage.getItem('userDetail');
    if (userLoginStr && userAccessToken) {
      restConnector.defaults.headers['Authorization'] = "Bearer " + userAccessToken;

      props.dispatch(reduxAction(LOGIN, JSON.parse(userLoginStr)));
      props.dispatch(reduxAction(USER_INFO, JSON.parse(userDetailStr)));
    }
  },[]);

  return (
    <BrowserRouter>
      <Header /> 
      <Switch>
        {/* <HomeScreen /> */}
        <Route path="/home" component={HomeScreen} />
        <PrivateRoute path="/user" Component={UserScreen} />
        <PrivateRoute path="/user/profile" Component={UserProfile} />
        <PrivateRoute path="/cart" Component={Cart}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        <Route path="/" component={HomeScreen} />
        <Route component={Notfound} />
      </Switch>

    </BrowserRouter>

  )
}

export default connect()(App);
