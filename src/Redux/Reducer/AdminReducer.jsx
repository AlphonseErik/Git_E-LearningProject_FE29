import { LOGIN_ADMIN, ADMIN_INFO } from '../Action/actionType'

let initialState = {
    // users: [],
    userDetail: null,
    credentials: null
}

const AdminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_ADMIN: {
            state.credentials = payload;
            return { ...state };
        }
        case ADMIN_INFO: {
            state.userDetail = payload;
            return { ...state };
        }
        default:
            return state;
    }
};

export default AdminReducer;