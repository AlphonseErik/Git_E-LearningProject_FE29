import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import CategoryReducer from './categoryReducer';
import ChoosenCategoryReducer from './categoryChoosenReducer';
import UserReducer from "./userReducer";
import UpdateUserReducer from "./updateUserReducer";
import CartItemReducer from './cartItemReducer';
import CourseDetailReducer from './courseDetailReducer';
import SearchReducer from './searchReducer';

const RootReducer = combineReducers({
  //toàn bộ state
  courseList: CourseReducer,
  courseDetail: CourseDetailReducer,
  categoryList: CategoryReducer,
  categoryChoosenList: ChoosenCategoryReducer,
  user: UserReducer,
  updatingUser: UpdateUserReducer,
  cartItem: CartItemReducer,
  search: SearchReducer,
});

export default RootReducer;