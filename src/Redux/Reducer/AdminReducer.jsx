import { ADMIN_INFO, ADMIN_GET_USER_REGIST_COURSE, ADMIN_LOGIN, GET_ALL_USER_INFOR, ADMIN_LOGOUT } from '../Action/actionType'

let initialState = {
    usersDetailCourse: null,
    adminDetail: null,
    userDetail: [],
    credentials: null,
    isLoginAdmin: false,
}

const AdminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADMIN_LOGIN: {
            state.credentials = payload;
            return { ...state, isLoginAdmin: true };
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
        case ADMIN_LOGOUT: {
            state = {
                usersDetailCourse: null,
                adminDetail: null,
                userDetail: [],
                credentials: null,
                isLoginAdmin: false,
            }
            return { ...state, isLoginAdmin: false };
        }
        default:
            return state;
    }
};

export default AdminReducer;