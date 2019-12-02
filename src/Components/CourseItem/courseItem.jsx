import React, { Component } from "react";
import classes from "./courseItemStyle.module.scss";
import { Button } from "@material-ui/core";

class CourseItem extends Component {
  render() {
    const { hinhAnh, tenKhoaHoc, moTa, luotXem } = this.props.item;

    return (
      <div className="container">
        <div className={classes.courseItem}>
          <div className={classes.card}>
            <img className="card-img-top" src={hinhAnh} />
            <div className="card-body text-left">
              <p className="card-title">{this._shortenStringTenKhoaHoc(tenKhoaHoc)}</p>
              <span className="card-text">{this._shortenString(moTa)}</span>
              <h5 className="mt-1">Lượt xem: {luotXem}</h5>
              <button className="btn btn-success">Thêm chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  _shortenStringTenKhoaHoc = (string) => {
    if (string && string.length > 12) {
      return string.substr(0, 12) + "..."
    }
    return string;
  }

  _shortenString = (string) => {
    if (string && string.length > 18) {
      return string.substr(0, 18) + "..."
    }
    return string;
  }
}

export default CourseItem;
