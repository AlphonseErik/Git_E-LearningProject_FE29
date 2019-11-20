import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'; //Thư viện thẻ link (thay thế thẻ <a></a>)
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" to='/'>CYBERSOFT</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to='/home' activeClassName='bg-success'>Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/coursedetail' activeClassName='bg-success' >CourseDetail</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/demohoc' activeClassName='bg-success' >HOC</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default connect()(Header);