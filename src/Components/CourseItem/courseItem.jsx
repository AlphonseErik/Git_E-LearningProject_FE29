import React, { Component } from "react";
import classes from "./courseItemStyle.module.scss";

class CourseItem extends Component {
    render() {
        const { hinhAnh, tenKhoaHoc, moTa } = this.props.item;

        return (
            <div className={classes.courseItem}>
                <img src={hinhAnh}/>
                <p>{tenKhoaHoc}</p>
                <span>{this._shortenString(moTa)}</span>
            </div>
        )
    }

    _shortenString = (string) => {
        if (string && string.length > 20) {
          return string.substr(0, 20) + "..."
        }
        return string;
      }
}

export default CourseItem;
