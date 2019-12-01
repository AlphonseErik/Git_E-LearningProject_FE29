import { LOGIN, UPDATE_USER, USER_INFO } from '../Action/actionType'

let initialState = {
    // users: [];
    userDetail: {},
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
            // const index = state.findIndex(item => item.username === payload.username);
            state.credentials = payload;
            return {...state};
        }
        default:
            return state;
    }
};
export default UserReducer;