import React, { Component } from 'react'
import classes from "./categoryItemStyle.module.scss"

class Category extends Component{
    render() {
        const { tenDanhMuc} = this.props.item;

        return (
            <div className={classes.category}>
                <span>{tenDanhMuc}</span>
            </div>
        )
    }

}

export default Category;