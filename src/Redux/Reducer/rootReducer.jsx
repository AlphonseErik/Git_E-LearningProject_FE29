import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import  {CategoryReducer} from './CategoryReducer';

const RootReducer = combineReducers({
  //toàn bộ state
  courseList: CourseReducer,
  CategoryReducer
});

export default RootReducer;