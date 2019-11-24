import React, { Component } from "react";
import classes from './header.module.scss';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="#"><i className="fa fa-magnet mr-2"></i> Udemy  </a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><i className="fa fa-th mr-2"></i>Categories<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                        <div className="input-group ml-3">
                            <input type="text" className="form-control" placeholder="Search for anything" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2"><i className="fa fa-search"></i></span>
                            </div>
                            </div>
                        </li>
                        
                    </ul>
                
                    
                    <div className=" mr-3">
                        <a className="nav-link text-white" href="#"> udemy for Business</a>
                    </div>
                    <div >
                        <a className="nav-link text-white" href="#">Tech on Udemy</a>
                    </div>
                  
                    <ul  className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <div className="mr-3 pt-2 ">
                        <a href="#">
                       <i className="text-white fa fa-shopping-cart"></i>
                       </a>
                   </div>
                        <li className="nav-item active">
                            <button className="btn bg-white">
                            <a className="text-dark" href="#">
                                Login
                                </a>
                            </button>
                           
                        </li>
                    
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Header;