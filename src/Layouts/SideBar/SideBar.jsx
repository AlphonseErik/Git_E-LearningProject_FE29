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
      

        return (
            <div className={classes.tong}>
               <img src ="./img/banner1.jpg" height={500}/>
               <div className={classes.fff}>      
               <ul>   
               <li>
                   <div className={classes.bar}> 
                    <a href="#"><i class="fa fa-bars"></i>
                   </a>
                   </div>
              </li>

                <li><a href="#"><i class="fa fa-envelope"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCWc3ASTJcb0FeO2oFfX8IDQ"><i class="fa fa-youtube"></i></a></li>
                <li><a href="https://www.facebook.com/lyhuy016"><i class="fa fa-bars"></i></a></li>
               </ul>

               </div>
               </div>     
        )
    }
}
