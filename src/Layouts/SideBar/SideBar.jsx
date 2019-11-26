import React, { Component } from 'react';
import classes from './SideBar.module.scss';

export default class SideBar extends Component {
    render() {
        return (
            <div className={classes.SideBar}>
              <img src="./img/banner1.jpg"/>
            </div>
        )
    }
}
