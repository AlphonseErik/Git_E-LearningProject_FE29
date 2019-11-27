import React, { useEffect } from "react";
import CourseService from "../../Services/courseService";
import { connect } from "react-redux"
import CourseItem from "../../Components/CourseItem/courseItem";
import classes from './homeStyle.module.scss';
import Category from "../../Components/CategoryItemChoosen/categoryItemChoosen";
import Container from '@material-ui/core/Container';


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
    }, [props.credentials]);

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

    // console.log("choosen", props.choosenCategoryList);

    return (
        <Container maxWidth="lg" >
            <div className={classes.home}>
                <div>
                    {/* {props.courseList.map((item, index) => (
                            <div className="col-3" key={index}>
                                <CourseItem item={item} />
                            </div>
                        ))} */}
                    <div className={classes.home_left}>
                        <h3>The world’s largest selection of courses</h3>
                        <div className={classes.home_left_p}>
                            <p>Choose from over 100,000 online video </p>
                            <p> with new additions published every month</p>
                        </div>
                    </div>
                    <Category />
                    <div className="row" >
                        {props.courseList.filter(item => item.danhMucKhoaHoc.maDanhMucKhoahoc === props.categoryChoosenList).map((item, index) => (
                            <div className="col-4 " key={index}>
                                <CourseItem item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </Container>

    )
}


const mapStateToProps = state => ({
    courseList: state.courseList,
    categoryChoosenList: state.categoryChoosenList,
    credentials: state.user.credentials,
});


export default connect(mapStateToProps)(HomeScreen);