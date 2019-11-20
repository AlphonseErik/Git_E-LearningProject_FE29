import React, { Component } from "react";
import HomeScreen from "./Screens/Home/home";
import CourseDetail from "./Screens/CourseDetail/courseDetail";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from "./Layouts/Header";
import HocDemo from "./HOC/HocDemo";
import Login from "./Screens/Login/Login";
import { connect } from "react-redux";
import reduxAction from "./Redux/Action/action";
import { LOGIN } from "./Redux/Action/type";
import { restConnector } from "./Services";
import { settings } from "./config/settings";
import PrivateRoute from "./HOC/Auth";
import SignupComponent from "./Screens/Signup/signup"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <Route path='/home' Component={HomeScreen} /> */}
          <PrivateRoute path='/home' Component={HomeScreen}/>
          <Route path='/coursedetail/:courseid' component={CourseDetail} />
          <PrivateRoute path='/demohoc' Component={HocDemo} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignupComponent}/>>

          <PrivateRoute path='/' Component={HomeScreen} />
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
