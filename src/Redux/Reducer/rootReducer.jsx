import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import CategoryReducer from './categoryReducer';
import ChoosenCategoryReducer from './categoryChoosenReducer';
import UserReducer from "./userReducer";
import UpdateUserReducer from "./updateUserReducer";

const RootReducer = combineReducers({
  //toàn bộ state
  courseList: CourseReducer,
  categoryList: CategoryReducer,
  categoryChoosenList: ChoosenCategoryReducer,
  user: UserReducer,
  updatingUser: UpdateUserReducer,
});

export default RootReducer;