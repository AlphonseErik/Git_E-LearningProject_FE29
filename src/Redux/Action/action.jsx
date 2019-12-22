import CourseService from "../../Services/courseService";
import { FETCH_COURSE_DETAIL } from './actionType';
import * as ACTION_TYPES from './actionType'

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
    courseService.fetchDetailKhoaHoc(courseid).then(res => {
      dispatch(reduxAction(FETCH_COURSE_DETAIL, res.data));
    }).catch(err => {
      console.log(err);
    })
  }
}

export default reduxAction;

export const SUCCESS = {
  type: ACTION_TYPES.SUCCESS
}

export const FAILURE = {
  type: ACTION_TYPES.FAILURE
}

export const success = () => {
  return {
    type: ACTION_TYPES.SUCCESS
  }
}

export const failure = () => {
  return {
    type: ACTION_TYPES.FAILURE
  }
}

