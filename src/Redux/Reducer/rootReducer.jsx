import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import CategoryReducer from './CategoryReducer';
import ChoosenCategoryReducer from './categoryChoosenReducer';
import UserReducer from "./userReducer";
import UpdateUserReducer from "./updateUserReducer";
import CartItemReducer from './cartItemReducer';
import {CourseDetailReducer} from './CourseDetailReducer';

const RootReducer = combineReducers({
  //toàn bộ state
  courseList: CourseReducer,
  categoryList: CategoryReducer,
  categoryChoosenList: ChoosenCategoryReducer,
  user: UserReducer,
  updatingUser: UpdateUserReducer,
  cartItem: CartItemReducer,
  CourseDetailReducer
});

export default RootReducer;