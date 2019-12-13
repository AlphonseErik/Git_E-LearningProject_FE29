import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default class SideBar extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,   
            
          };
        
        return (
        <Slider {...settings} autoplay >
         
        <img src="./img/banner2.jpg" height={400}/>
        <img src="./img/banner2.jpg"height={400}/>
        <img src="./img/banner2.jpg"height={400}/>
        </Slider>
      
          
        )
    }
}
