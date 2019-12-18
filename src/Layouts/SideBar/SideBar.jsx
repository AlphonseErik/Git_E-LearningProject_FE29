import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classes from "./SideBar.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default class SideBar extends Component {
  render() {
    return (
      <div className={classes.tong}>
        <img src="./img/banner1.jpg" height={500} />
        <div className={classes.fff}>
          <ul>
            <div className={classes.face}>
              <li>
                <a href="https://www.facebook.com/lyhuy016"target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
            </div>
            <div className={classes.twister}>
              <li>
                <a href="https://twitter.com/GiaHan79629411"target="_blank">
                <i className="fa fa-twitter"></i>         
               </a>
              </li>
            </div>
            <div className={classes.youtube}>
              <li>
                <a href="https://www.youtube.com/channel/UCWc3ASTJcb0FeO2oFfX8IDQ"target="_blank">
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
            </div>
            <div className={classes.bar}>
              <li>
                <a href="#">
                <i className="fa fa-bars"></i>

                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
