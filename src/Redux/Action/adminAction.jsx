import { restConnector } from "../../Services"
import { settings } from "../../config/settings";
import reduxAction from "./action";
import { ADMIN_GET_USER_REGIST_COURSE } from "./actionType";

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
            url: '/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet',
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