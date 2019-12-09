import React, { Component } from 'react';
import classes from './GetStarted.module.scss';

const GetStarted = props => {
     return (
          <div >
               <div className={classes.content}>
                    <div className="container">
                         <div className="row">
                              <div className="col-3">
                                   <div className="item">
                                        <i className="fa fa-code"></i>
                                   </div>
                              </div>
                              <div className="col-3">
                                   <div className="item">
                                        <i className="fa fa-adn"></i>
                                   </div>
                              </div>
                              <div className="col-3">
                                   <div className="item">
                                        <i className="fa fa-android"></i>
                                   </div>
                              </div>
                              <div className="col-3">
                                   <div className="item">
                                        <i className="fa fa-git"></i>
                                   </div>
                              </div>
                         </div>
                         <div className={classes.getMid}>
                              <div className="row mt-2 text-white">
                                   <div className="col-2">
                                        <i className="fa fa-git"></i>
                                   </div>
                                   <div className="col-8 ">
                                        <div className={classes.itemMid}>
                                             <h2>Get personalized recommendations</h2>
                                             <p>Answer a few questions for your top picks</p>
                                             <button className="btn btn-danger">Get started</button>
                                        </div>
                                   </div>
                                   <div className="col-2">
                                        <i className="fa fa-android"></i>
                                   </div>
                              </div>
                         </div>
                         <div className="row pb-3">
                              <div className="col-3">
                                   <div className="item">
                                        <i className="fa fa-code"></i>
                                   </div>
                              </div>
                              <div className="col-3">
                                   <div className="item">
                                        <i className="fa fa-adn"></i>
                                   </div>
                              </div>
                              <div className="col-3">
                                   <div className="item">
                                        <i className="fa fa-android"></i>
                                   </div>
                              </div>
                              <div className="col-3">
                                   <div className="item">
                                        <i className="fa fa-git"></i>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default GetStarted;
