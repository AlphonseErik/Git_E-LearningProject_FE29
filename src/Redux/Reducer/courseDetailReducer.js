import { FETCH_COURSE_DETAIL } from "../Action/type";

let initialState = {};

const CourseDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COURSE_DETAIL: {
      return payload;
    }
    default:
      return state;
  }
};
export default CourseDetailReducer;
