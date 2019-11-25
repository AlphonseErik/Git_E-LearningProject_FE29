import React, { Component } from "react";
import classes from './header.module.scss';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="#"><i className="fa fa-magnet mr-2"></i>Udemy</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {/* <li className="nav-item">
                            <div className="input-group ml-5">
                                <input type="text" className="form-control" placeholder="Search for anything" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2"><i className="fa fa-search"></i></span>
                                </div>
                            </div>
                        </li> */}
                    </ul>
                    {/* <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <div className=" mr-4">
                                <a className="nav-link text-white" href="#"> udemy for Business</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className=" mr-3">
                                <a className="nav-link text-white" href="#">Tech on Udemy</a>
                            </div>
                        </li>
                    </ul> */}
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-th mr-2"></i>Category
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#tab2Id">Action</a>
                                <a className="dropdown-item" href="#tab3Id">Another action</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#tab4Id">More...</a>
                            </div>
                        </li>

                        <li className="nav-item" >
                            <a className="nav-link">
                                <i className="text-white fa fa-shopping-cart"></i>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#" data-toggle="modal" data-target="#modelId">Login</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#" data-toggle="modal" data-target="#modelId">Sign Up</a>
                        </li>
                    </ul>
                </div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Body
                                </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;