import CourseService from "../../Services/courseService";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import classes from "./categoryItemHeaderStyle.module.scss";

const courseService = new CourseService();

const CategoryItemHeader = props => {

    // useEffect(() => {
    //     courseService.fetchCategory()
    //         .then(res => {
    //             props.dispatch({
    //                 type: "FETCH_CATEGORY",
    //                 payload: res.data
    //             }, console.log(res.data));
    //         }).catch(err => {
    //             console.log(err);
    //         })
    // }, [])

    // Lấy Mã Danh Mục Lưu Store
    let choosenCategory = (maDanhMuc) => {
        props.dispatch({
            type: "SET_CATEGORY",
            payload: maDanhMuc
        })
    }

    return (
        <div className={classes.categoryItem}>
            <div className={classes.categoryItem__dropDown}>
                {
                    props.categoryList.map((categoryChoose, index) => {
                        return (
                            <span className="dropdown-item" onClick={() => choosenCategory(categoryChoose.maDanhMuc)} key={index}> {categoryChoose.tenDanhMuc} </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    categoryList: state.categoryList,
});

export default connect(mapStateToProps)(CategoryItemHeader);