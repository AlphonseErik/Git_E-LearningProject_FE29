import React, { Component, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Header from "./Layouts/Header/header";
import HomeScreen from "./Screens/Home/home";
import { restConnector } from "./Services";
import reduxAction from "./Redux/Action/action";
import { LOGIN, USER_INFO, ADMIN_LOGIN } from "./Redux/Action/actionType";
import UserProfile from "./Components/UserProfileScreen/UserProfile/userProfile";
import Login from "./Screens/Login/login";
import Signup from "./Screens/Signup/signup";
import PrivateRoute from "./HOC/Auth"
import UserScreen from "./Screens/UserScreen/userScreen";
import Notfound from "./Screens/NotFound/notFound";
// import CartItem from "./Components/CartItem/cartItem";
import Cart from "./Screens/Cart/cart";
import CourseDetail from "./Components/CourseDetail/courseDetail";
import PrivateAdminRoute from "./HOC/AdminAuth";
import AdminScreen from "./Screens/AdminScreen/adminScreen";
import Orders from './Components/AdminProfileScreen/Orders/orders';
import AddNewUser from "./Components/AdminProfileScreen/AdminAddNewUser/adminAddNewUser";
import userCartProfile from "./Components/UserProfileScreen/UserCartProfile/userCartProfile";
import 'moment-timezone';
import Moment from 'react-moment';

import ReactLoading from 'react-loading';
import dateTime from "./Components/DateTime/dateTime";



const App = props => {

  useEffect(() => {
    const userLoginStr = localStorage.getItem('userLogin');
    const userAccessToken = localStorage.getItem('accessToken');
    const userDetailStr = localStorage.getItem('userDetail');
    const userRightStr = localStorage.getItem('userRight');
    if (userLoginStr && userAccessToken && userRightStr) {
      restConnector.defaults.headers['Authorization'] = "Bearer " + userAccessToken;
      if (userRightStr === "HV") {
        props.dispatch(reduxAction(LOGIN, JSON.parse(userLoginStr)));
        props.dispatch(reduxAction(USER_INFO, JSON.parse(userDetailStr)));
        return;
      }
      props.dispatch(reduxAction(LOGIN, JSON.parse(userLoginStr)));
      props.dispatch(reduxAction(ADMIN_LOGIN, JSON.parse(userLoginStr)));
      props.dispatch(reduxAction(USER_INFO, JSON.parse(userDetailStr)));

    }
  }, []);
    
  
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <HomeScreen /> */}
        <Route path="/home" component={HomeScreen} />
        <Route path="/coursedetail/:courseid" component={CourseDetail} />
        <Route path="/cart" component={Cart} />
        <PrivateRoute path="/user" Component={UserScreen} />
        <PrivateRoute path="/user/profile" Component={UserProfile} />
        <PrivateRoute path="/user/cart" Component={userCartProfile} />
        <PrivateAdminRoute path="/admin" exact Component={AdminScreen} />
        <PrivateAdminRoute path="/adduser" Component={AddNewUser} />

        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        <Route path="/" exact component={HomeScreen} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  )
}

export default connect()(App);
