import React, { Component, useEffect } from "react";
import classes from './headerStyle.module.scss';
import { connect } from "react-redux";
import CourseService from "../../Services/courseService";
import CategoryItemHeader from "../../Components/CategoryItemHeader/categoryItemHeader";
import Login from "../../Components/Login/login";
import Signup from "../../Components/Signup/signup";
import { NavLink } from 'react-router-dom';

const courseService = new CourseService();

const Header = props => {

    useEffect(() => {
        courseService.fetchCourse()
            .then(res => {
                props.dispatch({
                    type: "FETCH_COURSE",
                    payload: res.data,
                }, console.log(res.data));
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/home"><i className="fa fa-magnet mr-2"></i>Udemy</NavLink>
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
                            {props.categoryList.map((item, index) => (
                                <div key={index}>
                                    <CategoryItemHeader item={item} />
                                </div>
                            ))}
                        </div>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link">
                            <i className="text-white fa fa-shopping-cart"></i>
                        </a>
                    </li>
                    <Login />
                    <Signup />
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({
    categoryList: state.categoryList,
});

export default connect(mapStateToProps)(Header);