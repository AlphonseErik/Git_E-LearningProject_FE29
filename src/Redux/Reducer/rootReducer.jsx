import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import  CategoryReducer from './categoryReducer';

const RootReducer = combineReducers({
  //toàn bộ state
  courseList: CourseReducer,
  categoryList: CategoryReducer,
});

export default RootReducer;