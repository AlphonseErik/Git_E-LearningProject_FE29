import { FETCH_COURSE_DETAIL } from "../Action/actionType";

let initialState = {};

const CourseDetailReducer = (state = initialState, { payload, type }) => {

    switch (type) {
        case FETCH_COURSE_DETAIL: {
            console.log("payload detail", payload);
            return payload;
        }
        default:
            return state;
    }
}

export default CourseDetailReducer;