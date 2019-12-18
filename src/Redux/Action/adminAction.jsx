import { restConnector } from "../../Services"
import { settings } from "../../config/settings";
import reduxAction from "./action";
import { ADMIN_GET_USER_REGIST_COURSE, COURSE_REGISTING, GET_ALL_USER_INFOR, SEARCH_COURSE, SEARCH_USER_DETAIL } from "./actionType";
import { userDetail } from "./userAction";

//Lấy danh sách người dùng
export const getUserInfor = (userRight) => {
    if (userRight === "GV") {
        return dispatch => {
            restConnector({
                method: 'GET',
                url: '/api/quanlynguoidung/laydanhsachnguoidung?manhom=GP01',
            }).then(res => {
                dispatch(reduxAction(GET_ALL_USER_INFOR, res.data));
            }).catch(error => {
                console.log(error.response.data);
                alert('Error: ' + error.response.data)
            })
        }
    }
}

//Thêm người dùng mới
export const addNewUser = (newUserInfo, history) => {
    return dispatch => {
        restConnector({
            method: 'POST',
            url: '/api/quanlynguoidung/themnguoidung',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(settings.token),
            },
            data: newUserInfo,
        }).then(res => {
            console.log(res.data);
            alert("Add New User Success!! || New Username: " + res.data.taiKhoan + " || Password: " + res.data.matKhau);
        }).catch(error => {
            console.log(error.response.data);
            alert('Error: ' + error.response.data)
        })
    }
}

//Lấy danh sách ghi danh chờ xét duyệt
export const getUserRegistCourse = (userInfo, history) => {
    return dispatch => {
        restConnector({
            method: 'POST',
            url: '/api/QuanLyNguoiDung/laydanhsachhocvienchoxetduyet',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(settings.token),
            },
            data: {
                "maKhoaHoc": userInfo,
            },
        }).then(res => {
            console.log(res.data);
            dispatch(reduxAction(ADMIN_GET_USER_REGIST_COURSE, res.data));
        }).catch(error => {
            console.log(error.response.data);
        })
    }
}

//chấp nhận đăng ký khóa học
export const courseRegistingAdmin = (courseRegister, history) => {
    return dispatch => {
        restConnector({
            method: 'POST',
            url: '/api/quanlykhoahoc/ghidanhkhoahoc',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(settings.token),
            },
            data: courseRegister,
        }).then(res => {
            console.log(res.data);
            //Đăng nhập thành công => Lưu thông tin user và token vào localstorage để request về những api yêu cầu token
            // localStorage.removeItem("userProfile");
            // userDetail(settings.taiKhoan);
            userDetail(localStorage.getItem(settings.taiKhoan));
            // localStorage.setItem(settings.userProfile, JSON.stringify(res.data));

            //Lưu data lên store để render lại giao diện header
            dispatch(reduxAction(COURSE_REGISTING, res.data));
            // dispatch(reduxAction(UPDATE_USER_INFO, res.data));
        }).catch(error => {
            console.log(error.response.data);
        })
    }
};

export const searchForUserByKey = (searchItem) => {
    return dispatch => {
        restConnector({
            method: 'GET',
            url: `api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${searchItem}`,
        }).then(res => {
            console.log(res.data);
            dispatch(reduxAction(SEARCH_USER_DETAIL, res.data));
        }).catch(error => {
            console.log(error.response.data);
        })
    }
};