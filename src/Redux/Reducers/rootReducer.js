import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";

const RootReducer = combineReducers({
    //toàn bộ state
    courseList: CourseReducer,
});

export default RootReducer;