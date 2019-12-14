import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import classes from './SideBar.module.scss';

export default class SideBar extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,

        };

        return (
            <Slider {...settings}  >
                <div className={classes.tong}>
                    <div className={classes.con}>
                        <h1>1111111111111111111111</h1>
                        <button className="btn">Click</button>
                    </div>
                </div>
                <div className={classes.tong}>
                    <div className={classes.con}>
                        <h2>222222222222222222</h2>
                        <button className="btn">Click</button>
                    </div>
                </div>
                <div className={classes.tong}>
                    <div className={classes.con}>
                        <h3>33333333333333333</h3>
                        <button className="btn">Click</button>
                    </div>
                </div>
            </Slider>


        )
    }
}
