import React, { Component,useEffect } from 'react'
import classes from "./categoryItemStyle.module.scss";
import {connect} from 'react-redux';
import CourseService from '../../Services/courseService';

const courseService = new CourseService();
const Category = props =>{
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
    let ChoosenCategory =(maDanhMuc)=>{
          props.dispatch({
            type:"SET_CATEGORY",
            payload:maDanhMuc
        })
  }
    // const { tenDanhMuc} = this.props.item;
    return (    
        <div className={classes.categoryItem}>
            <button className="btn-group">
                {
                    props.categoryList.map((danhmuc,index)=>{
                     return (<button className="btn" onClick={()=>ChoosenCategory(danhmuc.maDanhMuc)} key={index}> {danhmuc.tenDanhMuc} </button>)
                    })
                }
            </button>
            </div>
        )
}
const mapStateToProps = state => ({
    categoryList: state.categoryList,
});
export default connect(mapStateToProps)(Category);