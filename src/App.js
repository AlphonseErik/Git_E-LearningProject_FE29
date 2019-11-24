import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Header from "./Layouts/Header/header";
import HomeScreen from "./Screens/Home/home";
import SideBar from "./Layouts/SideBar/SideBar";
import BottomSideBar from "./Layouts/SideBar/BottomSideBar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <SideBar/>
        <BottomSideBar />
        <Switch>
          <HomeScreen/>
        </Switch>

      </BrowserRouter>

    )
  }
}

export default connect()(App);
