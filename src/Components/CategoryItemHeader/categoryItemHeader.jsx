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

    const { tenDanhMuc } = props.item;

    return (
        <div className={classes.categoryItem}>
            <a className="dropdown-item" href="#tab2Id">{tenDanhMuc}</a>
        </div>
    )
}

const mapStateToProps = state => ({
    categoryList: state.categoryList,
});

export default connect(mapStateToProps)(CategoryItemHeader);