import { UPDATE_USER_INFO } from "../Action/actionType";

let initialState = null;

const UpdateUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_USER_INFO: {
            state = payload;
            return state ? { ...state } : null;
        }
        default: return state;
    }
}

export default UpdateUserReducer;