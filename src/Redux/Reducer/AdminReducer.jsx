import { ADMIN_INFO, ADMIN_GET_USER_REGIST_COURSE, ADMIN_LOGIN, GET_ALL_USER_INFOR } from '../Action/actionType'

let initialState = {
    usersDetailCourse: null,
    adminDetail: null,
    userDetail: [],
    credentials: null
}

const AdminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADMIN_LOGIN: {
            state.credentials = payload;
            return { ...state };
        }
        case ADMIN_INFO: {
            state.adminDetail = payload;
            return { ...state };
        }
        case ADMIN_GET_USER_REGIST_COURSE: {
            state.usersDetailCourse = payload;
            return { ...state };
        }
        case GET_ALL_USER_INFOR: {
            state.userDetail = payload;
            return { ...state };
        }
        default:
            return state;
    }
};

export default AdminReducer;