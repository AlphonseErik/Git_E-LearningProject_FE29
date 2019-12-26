import React, { Component } from "react";
import classes from "./studentSayStyle.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const StudentSay = props => {

  return (
    <div className={classes.contentSay}>
      <div className="container">
        <h3>Các học viên nói gì về chúng tôi</h3>
        <div className="row" >
          <div className="  col-4 col-lg-4 col-md-12 col-sm-12 ">
            <div className="container">
              <div className={classes.item} data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <img src="./img/hanly.jpg" width={50} height={50} />
                <span className="ml-3">Han Ly</span>
                <div>
                  <p>
                    Udemy is a life saver. I don't have the time or money for
                    a college education. My goal is to become a freelance web
                    developer, and thanks to Udemy, I'm really close.
                    </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 col-lg-4 col-md-12 col-sm-12">
            <div className="container">
              <div className={classes.item1} data-aos="fade-left"
                data-aos-duration="3000">
                <img src="./img/tungson.jpg" width={50} height={50} />
                <span className="ml-3">Son Tung</span>
                <div>
                  <p>
                    Udemy is a life saver. I don't have the time or money for
                    a college education. My goal is to become a freelance web
                    developer, and thanks to Udemy, I'm really close.
                    </p>
                </div>
              </div>
            </div>
          </div>
          <div className="  col-4  col-lg-4 col-md-12 col-sm-12 ">
            <div className="container">
              <div className={classes.item2} data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" >
                <img src="./img/tungson.jpg" width={50} height={50} />
                <span className="ml-3">Bill</span>
                <div>
                  <p>
                    Udemy is a life saver. I don't have the time or money for
                    a college education. My goal is to become a freelance web
                    developer, and thanks to Udemy, I'm really close.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.classThuongHieu}>
          <div className="container">
            <div className="row">
              <div className="col-4 col-sm-4">
                <div className="item">
                  <img src="https://i.udemycdn.com/partner-logos/booking-logo.svg" />
                </div>
              </div>
              
              
              <div className="col-4 col-sm-4">
                <img src="https://i.udemycdn.com/partner-logos/adidas-logo.svg" />
              </div>
              <div className="col-4 col-sm-4">
                <img src="https://i.udemycdn.com/partner-logos/eventbrite-logo.svg" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6 border-right">
            <div className={classes.classBecome}>
              <div className="container">
                <h3>Become an instructor</h3>
                <p>Top instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                <button className="btn btn-danger">Start teaching today</button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className={classes.classBecome}>
              <div className="container">
                <h3>Udemy for Business</h3>
                <p>Get unlimited access to 3,500+ of Udemy’s top courses for your team.</p>
                <button className="btn btn-danger">Get Udemy for Bunissen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentSay;
