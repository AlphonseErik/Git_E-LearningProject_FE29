import { LOGIN } from '../Action/type'

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