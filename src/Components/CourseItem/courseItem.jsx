import React, { Component } from "react";
import classes from "./courseItemStyle.module.scss";

class CourseItem extends Component {
  render() {
    const { hinhAnh, tenKhoaHoc, moTa, luotXem } = this.props.item;

    return (
      <div className={classes.courseItem}>
        <div className={classes.card}>
          <img className="card-img-top" src={hinhAnh} alt="s" />
          <div className="card-body text-left">
            <h4 className="card-title">{tenKhoaHoc}</h4>
            <span className="card-text">{this._shortenString(moTa)}</span>
            <h5 className="mt-1">Lượt xem: {luotXem}</h5>

          </div>
        </div>

      </div>

    )
  }

  _shortenString = (string) => {
    if (string && string.length > 40) {
      return string.substr(0, 40) + " ..."
    }
    return string;
  }
}

export default CourseItem;
