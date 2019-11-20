import React, { Component, useEffect } from "react";
import classes from "./homeStyle.module.scss";
import CourseItem from "../../Components/CourseItem/courseItem";

import { connect } from "react-redux";
import CourseService from "../../Services/courseService";
import reduxAction from "../../Redux/Action/action";
import { FETCH_COURSES } from "../../Redux/Action/type";

const courseService = new CourseService();

const HomeScreen = props => {

  useEffect(() => {
    if(props.credentials){
      courseService
      .fetchCourses()
      .then(res => {
        props.dispatch(
          reduxAction(FETCH_COURSES, res.data)
        );
      })
      .catch(err => {
        console.log(err);
      });
    }
  }, [props.credentials])

  return (
    <div>
      <h1 className={classes.title}>Home Screen</h1>
      <div className="container">
        <div className="row">
          {props.courseList.map((item, index) => (
            <div className="col-3" key={index}>
              <CourseItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// componentDidMount() {
//   if (this.props.credentials) {
//     //call api lấy danh sách khoá học
//     courseService
//       .fetchCourses()
//       .then(res => {
//         this.props.dispatch(
//           reduxAction(FETCH_COURSES, res.data)
//         );
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     // console.log("done");
//   }
// }

// //hàm tự động chạy 1 lần duy nhất khi component khởi
// //chạy sau render
// componentDidUpdate(prevProps) {
//   if (this.props.credentials && !prevProps.credentials) {
//     //call api lấy danh sách khoá học
//     courseService
//       .fetchCourses()
//       .then(res => {
//         this.props.dispatch(
//           reduxAction(FETCH_COURSES, res.data)
//         );
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     // console.log("done");
//   }
// }


/**
 * 1.tạo 1 dữ liệu courseList và reducer CourseReducer
 * 2.trong hàm then, dispatch action lên store , gửi list course lên
 * 3.Lên courseReducer xử lý action
 * 4.Ở Home.js, lấy courseList xuống và map
 *
 */

const mapStateToProps = state => ({
  courseList: state.courseList,
  credentials: state.user.credentials,
});

export default connect(mapStateToProps)(HomeScreen);
