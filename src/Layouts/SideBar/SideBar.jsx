import React, { Component } from 'react';
import classes from './SideBar.module.scss';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';

export default class SideBar extends Component {
    render() {
        let settings ={
            dots:true,
            infinite:true,
            speed:8000,
            slidesToShow:1,
            slidesToScroll:1,
            autoplay:true
        };
        return (
            //  <Slider {...settings}>
            <div className={classes.SideBar}>
              <img src="./img/banner1.jpg"/>
            </div>
            // <div className={classes.SideBar}>
            //   <img src="./img/banner2.jpg"/>
            // </div>
            // <div className={classes.SideBar}>
            //   <img src="./img/banner4.jpg"/>
            // </div>
            // </Slider>
        )
    }
}
