import React, { Component } from "react";
import HomeScreen from "./Screens/Home/home";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from "./Layouts/Header";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/home' Component={HomeScreen}/>

          <Route path='/' Component={HomeScreen} />
        </Switch>

      </BrowserRouter>
    )
  }
}

export default App;
