import React, { useEffect } from "react";
import CourseService from "../../Services/courseService";
import { connect } from "react-redux"
import CourseItem from "../../Components/CourseItem/courseItem";
import classes from './homeStyle.module.scss';
import Category from "../../Components/Category/Category";


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

    return (
        <div className={classes.home}>
            <div className="container">
                <div className="row">
                    {/* {props.courseList.map((item, index) => (
                        <div className="col-3" key={index}>
                            <CourseItem item={item} />
                        </div>
                    ))} */}
                    <div className="col-5">
                        <div className={classes.home_left}>
                            <h3>The world’s largest selection of courses</h3>
                            <div className={classes.home_left_p}>
                            <p>Choose from over 100,000 online video </p>
                            <p> with new additions published every month</p>
                            </div>
                         </div>
                    </div>
                    <div className="col-7">
                        <div className="row">
                               <Category/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    courseList: state.courseList,
});


export default connect(mapStateToProps)(HomeScreen);