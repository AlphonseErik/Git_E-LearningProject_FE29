import { FETCH_COURSES, COURSE_REGISTING } from "../Action/actionType";

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
        default:
            return state;
    }
}

export default CourseReducer;