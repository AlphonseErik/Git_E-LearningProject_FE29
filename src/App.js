import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Header from "./Layouts/Header/header";
import HomeScreen from "./Screens/Home/home";
import SideBar from "./Layouts/SideBar/SideBar";
import BottomSideBar from "./Layouts/SideBar/BottomSideBar";
import { restConnector } from "./Services";
import reduxAction from "./Redux/Action/action";
import { LOGIN } from "./Redux/Action/actionType";
import UserProfile from "./Screens/UserProfile/userProfile";
import Login from "./Screens/Login/login";
import Signup from "./Screens/Signup/signup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        
        <Switch>
        {/* <HomeScreen /> */}
          <Route path="/home" exact component={HomeScreen}/>
          <Route path="/userprofile" exact component={UserProfile}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={Signup}/>

          <Route path="/" exact component={HomeScreen}/>
        </Switch>

      </BrowserRouter>

    )
  }

  componentDidMount() {
    const userLoginStr = localStorage.getItem('userLogin');
    const userAccessToken = localStorage.getItem('accessToken');
    if (userLoginStr && userAccessToken) {
      restConnector.defaults.headers['Authorization'] = "Bearer " + userAccessToken;

      this.props.dispatch(reduxAction(LOGIN, JSON.parse(userLoginStr)));
    }
  }
}

export default connect()(App);
