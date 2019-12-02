import { LOGIN, UPDATE_USER, USER_INFO, SIGNUP } from '../Action/actionType'

let initialState = {
    // users: [];
    userDetail: null,
    credentials: null
}

const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN: {
            state.credentials = payload;
            return { ...state }
        }
        case USER_INFO:{
            state.userDetail = payload;
            return {...state};
        }
        case UPDATE_USER:{
            state.credentials = payload;
            return {...state};
        }
        case SIGNUP:{
            payload = payload;
            return {...state};
        }
        default:
            return state;
    }
};
export default UserReducer;