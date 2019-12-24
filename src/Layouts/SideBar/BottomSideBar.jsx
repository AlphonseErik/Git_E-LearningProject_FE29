import React, { Component } from 'react';
import classes from './BottomSideBar.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
export default class BottomSideBar extends Component {

    render() {
        return (
            <div >
                <div className={classes.Bottom}>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-2">
                                        <i className="fa fa-recycle pt-3"></i>
                                    </div>
                                    <div className="col-10 pt-2">
                                        <span className="">100,000 online </span>
                                        <p className="">Explore a variety of fresh topics</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-2">
                                        <i className="fa fa-recycle pt-3"></i>
                                    </div>
                                    <div className="col-10 pt-2">
                                        <span className="">Expert </span>
                                        <p className="">Find the right instructor for you</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-2">
                                        <i className="fa fa-recycle pt-3"></i>
                                    </div>
                                    <div className="col-10 pt-2">
                                        <span className="">Lifetime </span>
                                        <p className="">Learn on your schedule</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
