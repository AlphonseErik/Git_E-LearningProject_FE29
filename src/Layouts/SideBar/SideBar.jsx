import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import classes from './SideBar.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default class SideBar extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,

        };

        return (
            <Slider {...settings}  data-aos="fade-down-left">
               <img src ="./img/banner1.jpg" height={500}/>
            </Slider>
                  
        )
    }
}
