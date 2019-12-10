import { FETCH_COURSES } from "../Action/actionType";

let initialState = [];

const CourseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_COURSES: {
            state = payload;
            return [...state];
        }

        default:
            return state;
    }
}

export default CourseReducer;