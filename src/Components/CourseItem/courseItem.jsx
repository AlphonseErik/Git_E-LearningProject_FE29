import React, { Component } from "react";
import classes from "./courseItemStyle.module.scss";
import Popup from 'reactjs-popup';
import { connect } from 'react-redux';
import { ADD_CART_ITEM } from "../../Redux/Action/actionType";


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

  const _shortenString = (string) => {
    if (string && string.length > 18) {
      return string.substr(0, 18) + "..."
    }
    return string;
  }

  const { hinhAnh, tenKhoaHoc, moTa, luotXem, ngayTao, nguoiTao, soLuongHocVien } = props.item;

  return (
    <Popup trigger={
      <div className="container">
        <div className={classes.courseItem}>
          <a className={classes.classA} href="#">
            <div className={classes.card}>
              <img className="card-img-top" src={hinhAnh} />
              <div className="card-body text-left">
                <p className="card-title text-left">{_shortenStringTenKhoaHoc(tenKhoaHoc)}</p>
                <h4 className={classes.classTacGia}>Tác giả: {nguoiTao.hoTen}</h4>
              </div>
            </div>
          </a>
        </div>
      </div>}
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
              <button className="btn btn-success">Detail</button>
              <button className="btn btn-danger" onClick={() => { addToCart(props.item) }}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  )
}

export default connect()(CourseItem);
