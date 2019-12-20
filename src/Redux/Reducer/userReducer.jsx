import { LOGIN, USER_INFO, SIGNUP, UPDATE_USER_INFO } from '../Action/actionType'

let initialState = {
    users: [],
    userDetail: null,
    credentials: null,
    userDetailEdit: null,
}

const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN: {
            state.credentials = payload;
            return { ...state };
        }
        case USER_INFO: {
            state.userDetail = payload;
            return { ...state };
        }
        case UPDATE_USER_INFO: {
            state.userDetailEdit = payload;
            return { ...state };

            return { ...state };
        }
        case SIGNUP: {
            payload = payload;
            return state;
        }
        default:
            return state;
    }
};

export default UserReducer;