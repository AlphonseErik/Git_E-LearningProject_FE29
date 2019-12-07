import React, { Component, useEffect } from 'react'
import classes from "./categoryItemChoosenStyle.module.scss";
import { connect } from 'react-redux';
import CourseService from '../../Services/courseService';

const courseService = new CourseService();
const Category = props => {
    useEffect(() => {
        courseService.fetchCategory()
            .then(res => {
                props.dispatch({
                    type: "FETCH_CATEGORY",
                    payload: res.data
                }, console.log(res.data));
            }).catch(err => {
                console.log(err);
            })
    }, [])

    // Lấy Mã Danh Mục Lưu Store
    let ChoosenCategory = (maDanhMuc) => {
        props.dispatch({
            type: "SET_CATEGORY",
            payload: maDanhMuc
        })
    }
    // const { tenDanhMuc} = this.props.item;
    return (
        <div className="btn-group" className={classes.categoryItem} >
            {
                props.categoryList.map((danhmuc, index) => {
                    return (
                       
                        <button onClick={() => ChoosenCategory(danhmuc.maDanhMuc)} key={index}> {danhmuc.tenDanhMuc} </button>
                       
                    )
                })
            }
        </div>
    )
}
const mapStateToProps = state => ({
    categoryList: state.categoryList,
});

export default connect(mapStateToProps)(Category);