import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import CourseDetailReducer from "./courseDetailReducer";
import UserReducer from "./userReducer"

const RootReducer = combineReducers({
  //toàn bộ state
  courseList: CourseReducer,
  courseDetail: CourseDetailReducer,
  user: UserReducer
});

export default RootReducer;
