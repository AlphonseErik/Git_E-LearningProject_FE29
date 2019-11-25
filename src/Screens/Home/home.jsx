import React, { useEffect } from "react";
import CourseService from "../../Services/courseService";
import { connect } from "react-redux"
import CourseItem from "../../Components/CourseItem/courseItem";
import classes from './homeStyle.module.scss';
import Category from "../../Components/CategoryItem/categoryItem";


const courseService = new CourseService();

const HomeScreen = props => {
    useEffect(() => {
        courseService.fetchCourse()
            .then(res => {
                props.dispatch({
                    type: "FETCH_COURSE",
                    payload: res.data,
                }, console.log(res.data));
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

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


    return (
        <div className={classes.home}>
            <div>
                <div className="row">
                    {/* {props.courseList.map((item, index) => (
                        <div className="col-3" key={index}>
                            <CourseItem item={item} />
                        </div>
                    ))} */}
                    <div className="col-6">
                        <div className={classes.home_left}>
                            <h3>The world’s largest selection of courses</h3>
                            <div className={classes.home_left_p}>
                                <p>Choose from over 100,000 online video </p>
                                <p> with new additions published every month</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={classes.home_right}>
                            <div className={classes.home_right_span}>
                                <span>This Course Category List</span>
                            </div>

                            <div className="row">
                                {props.categoryList.map((item, index) => (
                                    <div className="col-2" key={index}>
                                        <Category item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    courseList: state.courseList,
    categoryList: state.categoryList,
});


export default connect(mapStateToProps)(HomeScreen);