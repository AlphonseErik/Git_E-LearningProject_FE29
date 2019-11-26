import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import CategoryReducer from './CategoryReducer';
import ChoosenCategoryReducer from './categoryChoosenReducer';

const RootReducer = combineReducers({
  //toàn bộ state
  courseList: CourseReducer,
  categoryList: CategoryReducer,
  categoryChoosenList: ChoosenCategoryReducer,
});

export default RootReducer;