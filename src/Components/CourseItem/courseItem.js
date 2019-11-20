import React, { Component } from "react";
import classes from "./courseStyle.module.scss";
import { NavLink } from 'react-router-dom';


class CourseItem extends Component {
  render() {
    const { hinhAnh, tenKhoaHoc, moTa, maKhoaHoc } = this.props.item;
    return (
      <div className={classes.courseItem}>
        <img src={hinhAnh} />
        <p>{tenKhoaHoc}</p>
        <span>{this._shortenString(moTa)}</span>
        <NavLink to={`/coursedetail/${maKhoaHoc}`} className="btn btn-success">Xem Chi Tiêt</NavLink>
      </div>
    );
  }
  _shortenString = (string) => {
    if (string && string.length > 20) {
      return string.substr(0, 20) + "..."
    }
    return string;
  }
}

export default CourseItem;
