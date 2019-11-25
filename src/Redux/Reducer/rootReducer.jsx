import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import  CategoryReducer from './CategoryReducer';
import {ChoosenCategory} from './ChoosenCategory';

const RootReducer = combineReducers({
  //toàn bộ state
  courseList: CourseReducer,
  categoryList: CategoryReducer,
  ChoosenCategory
});

export default RootReducer;