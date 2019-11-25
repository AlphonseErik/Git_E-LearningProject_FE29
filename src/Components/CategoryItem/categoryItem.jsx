import React, { Component } from 'react'
import classes from "./categoryItemStyle.module.scss";

class Category extends Component{
    render() {
        const { tenDanhMuc} = this.props.item;

        return (
            <a className="dropdown-item" href="#tab2Id">{tenDanhMuc}</a>
        )
    }

}

export default Category;