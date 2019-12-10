import CourseService from "../../Services/courseService";
import { FETCH_COURSE_DETAIL } from './actionType';

const courseService = new CourseService();

//action creator
const reduxAction = (type, payload) => {
  return {
    type: type,
    payload: payload
  };
};

//async action
export const fetchCourseDetail = (courseid) => {
  return dispatch => {
    courseService.
      fetchDetailKhoaHoc(courseid).then(res => {
        dispatch(reduxAction(FETCH_COURSE_DETAIL, res.data));
      }).catch(err => {
        console.log(err);
      })
  }
}

export default reduxAction;