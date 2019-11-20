import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import CourseService from "../../Services/courseService";
import reduxAction, { fetchCourseDetail } from "../../Redux/Action/action";
import { FETCH_COURSE_DETAIL } from "../../Redux/Action/type";

const courseService = new CourseService();

class CourseDetail extends Component {




  render() {
    return (
      <div>
        <h1>Course Detail</h1>
        <p>{this.props.course.tenKhoaHoc}</p>
        <p>{this.props.course.maKhoaHoc}</p>
        <p>{this.props.course.moTa}</p>
        <img src={this.props.course.hinhAnh} />
      </div>
    );
  }
  componentDidMount() {
    //Lấy tham số mã khóa học từ url
    const { courseid } = this.props.match.params;
    // const courseid = this.props.match.params.courseid;


    //call api lấy chi tiết khoá học
    this.props.dispatch(fetchCourseDetail(courseid))

  }
}

/**
 * 1.Khi load trang, dùng axios gửi lên server
http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=111
 * 2. lưu cái course detail lên store (trên store phải có 1 dữ liệu mới, 1 reducer mới)
 * 3. ở courseDetail component, lấy "chi tiết khoá học" từ store xuống, hiện ra màn hình
 * các thông tin sau: tên, mã, hình ảnh, mô tả, người tao.
 */

const mapStateToProps = state => ({
  course: state.courseDetail
});

export default connect(mapStateToProps)(CourseDetail);
