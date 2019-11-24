let initialState = [];

const CourseReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case "FETCH_COURSE": {
            state = payload;
            return [...state];
        }
        default:
            return state;
    }
}

export default CourseReducer;