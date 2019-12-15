import { ADMIN_INFO, ADMIN_GET_USER_REGIST_COURSE, ADMIN_LOGIN } from '../Action/actionType'

let initialState = {
    usersDetailCourse: null,
    userDetail: null,
    credentials: null
}

const AdminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADMIN_LOGIN: {
            state.credentials = payload;
            return { ...state };
        }
        case ADMIN_INFO: {
            state.userDetail = payload;
            return { ...state };
        }
        case ADMIN_GET_USER_REGIST_COURSE: {
            state.usersDetailCourse = payload;
            return { ...state };
        }
        default:
            return state;
    }
};

export default AdminReducer;