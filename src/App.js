import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Header from "./Layouts/Header/header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Switch>
        </Switch>

      </BrowserRouter>
    )
  }
}

export default connect()(App);
