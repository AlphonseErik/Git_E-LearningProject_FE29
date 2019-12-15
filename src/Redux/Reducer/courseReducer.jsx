import { FETCH_COURSES, COURSE_REGISTING } from "../Action/actionType";
import {SEARCH_COURSE} from '../Action/actionType';

let initialState = [];

const CourseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_COURSES: {
            state = payload;
            return [...state];
        }
        case COURSE_REGISTING: {
            console.log("thanh toan", payload);
            return [...state];
        }
        case SEARCH_COURSE:{
            console.log("course reducer",payload);
              state.filter(task=>{
                return task.tenKhoaHoc.toLowerCase().indexOf(payload.toLowerCase()) !== -1
            });
        }
        default:
            return state;
    }
}

export default CourseReducer;