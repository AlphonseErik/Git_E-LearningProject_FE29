import { UPDATE_USER } from "../Action/actionType";

let initialState = null;

const UpdateUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_USER: {
            state = payload;
            return state ? { ...state } : null;
        }
        default: return state;
    }
}

export default UpdateUserReducer;