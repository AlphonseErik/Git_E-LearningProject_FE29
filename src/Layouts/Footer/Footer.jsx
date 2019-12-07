import React, { Component } from "react";
import classes from './Footer.module.scss';

export default class Footer extends Component {
  render() {
    return (
        <div className={classes.contentclass}>
      <div className="container">
        <div className="row">
          <div className="col-3">
              <div>
            <a href="#">Udemy for business</a>
            </div>
            <div>
            <a href="#">Teach on Udemy</a>
            </div>
            <div>
            <a href="#">Udemy for app</a>
            </div>
            <div>
            <a href="#">About us</a>
            </div>
          </div>
          <div className="col-3">
          <div>
            <a href="#">Carees</a>
            </div>
            <div>
            <a href="#">Blog</a>
            </div>
            <div>
            <a href="#">Help and Support</a>
            </div>
            <div>
            <a href="#">Affliate</a>
            </div>
          </div>
          <div className="col-3">
          <div>
            <a href="#">Sitemap</a>
            </div>
            <div>
            <a href="#">Featured courses</a>
            </div>
          </div>
          <div className="col-3">
              <button  className="btn">EngLish</button>
          </div>
        </div>
      </div>
        <hr className="mt-3"></hr>
        <div className="container">
        <div className="row">
                <div className="col-4">
               <img src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" width={100}height={100}/>
               <span className="ml-3 pt-2">Copyright © 2019 Udemy, Inc.</span>
               </div>
               <div className="col-8">
                  <div className="text-right pt-3">
                      <a href="#">Terms</a>
                      
                      <a className="mx-2" href="#">Privacy Policy and Cookie Policy</a>
                      
                  </div>
               </div>
           </div>
        </div>
             
      </div>
    );
  }
}
