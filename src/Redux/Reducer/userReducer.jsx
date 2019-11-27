import { LOGIN } from '../Action/actionType'

let initialState = {
    // users: [];
    // userDetail: {},
    credentials: null
}

const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN: {
            state.credentials = payload;
            return { ...state }
        }
        default:
            return state;
    }
};
export default UserReducer;