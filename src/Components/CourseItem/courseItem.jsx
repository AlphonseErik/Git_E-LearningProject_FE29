import React, { Component } from "react";
import classes from "./courseItemStyle.module.scss";

import Popup from 'reactjs-popup';
import { connect } from 'react-redux';
import { ADD_CART_ITEM } from "../../Redux/Action/actionType";
import { NavLink } from 'react-router-dom';

const CourseItem = props => {

  const addToCart = (khoahoc) => {
    props.dispatch({
      type: ADD_CART_ITEM,
      payload: khoahoc
    })
  }

  const _shortenStringTenKhoaHoc = (string) => {
    if (string && string.length > 12) {
      return string.substr(0, 12) + "..."
    }
    return string;
  }

  // const _shortenString = (string) => {
  //   if (string && string.length > 18) {
  //     return string.substr(0, 18) + "..."
  //   }
  //   return string;
  // }

  const { hinhAnh, tenKhoaHoc, moTa, luotXem, ngayTao, nguoiTao, soLuongHocVien, maKhoaHoc } = props.item;

  return (
    <Popup trigger={
      <NavLink to={`/coursedetail/${maKhoaHoc}`}>
        <div className="container mt-3">
          <div className={classes.courseItem}>
            <div className={classes.classA}>
              <div className={classes.card}>
                <img className="card-img-top" src={hinhAnh} />
                <div className="card-body text-left">
                  <p className="card-title text-left">{_shortenStringTenKhoaHoc(tenKhoaHoc)}</p>
                  <hr></hr>
                  <div className={classes.star}>
                  <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o" />
                                <span>4.7 ({luotXem})</span>
                    </div>
                  <div className="text-right">
                     <span className={classes.span1}>50$</span>
                     <span className="text-bold">25$</span>
                     </div>
                </div>
                
              </div>
            </div>
          </div>
          </div>
      </NavLink>}
      position={['top left', 'top right', 'bottom right', 'bottom left', 'right center', 'left center', 'top center', 'bottom center', 'center center']} on={"hover"}>
      <div className={classes.popup}>
        <div className="card text-left container">
          <div className={classes.PopupCard}>
            <img src={hinhAnh} width={260} height={200} />
            <p className={classes.PopupNgayTao} >Ngày tạo: {ngayTao}</p>
            <h3>{tenKhoaHoc}</h3>
            <h4>{moTa}</h4>
            <h5 className="mt-1">Lượt xem: {luotXem}</h5>
            <h2>Học viên ghi danh : {soLuongHocVien} </h2>
            <div className="container">
              <NavLink to={`/coursedetail/${maKhoaHoc}`} className="btn btn-success pd-2">Detail</NavLink>
              <button className="btn btn-danger" onClick={() => { addToCart(props.item) }}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  )
}

export default connect()(CourseItem);
