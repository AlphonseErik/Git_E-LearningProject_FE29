import { type, LOGIN, UPDATE_USER, USER_INFO, SIGNUP, UPDATE_USER_INFO, ADD_CART_ITEM } from './actionType';
import { settings } from '../../config/settings';
import reduxAction from "./action";
import { restConnector } from '../../Services';

//Đăng ký
export const userSignupAction = (userSignup, history) => {
    return dispatch => {
        //Gọi ajax backend thông qua api đưa data userLogin về server
        restConnector({
            method: 'POST',
            url: '/api/quanlynguoidung/dangky',
            data: userSignup,
        }).then(res => {
            console.log(res.data);

            //Lưu data lên store để render lại giao diện header
            dispatch(reduxAction(SIGNUP, res.data));

            //bỏ token lên header của tất cả request
            // restConnector.defaults.headers['Authorization'] = "Bearer " + res.data.accessToken;

            history.push('./login');
        }).catch(error => {
            console.log(error.response.data);
            alert('Lỗi: ' + error.response.data);
        })
    }
};

//Đăng nhập
export const userLoginAction = (userLogin, history) => {
    return dispatch => {
        //Gọi ajax backend thông qua api đưa data userLogin về server
        restConnector({
            method: 'POST',
            url: '/api/quanlynguoidung/dangnhap',
            data: userLogin,
        }).then(res => {
            console.log(res.data);
            // alert('Đăng nhập thành công');
            //Đăng nhập thành công => Lưu thông tin user và token vào localstorage để request về những api yêu cầu token
            localStorage.setItem(settings.userLogin, JSON.stringify(res.data));
            localStorage.setItem(settings.token, res.data.accessToken);
            localStorage.setItem(settings.taiKhoan, res.data.taiKhoan);
            // localStorage.setItem(settings.maLoaiNguoiDung, res.data.maLoaiNguoiDung);

            //Lưu data lên store để render lại giao diện header
            dispatch(reduxAction(LOGIN, res.data));

            //bỏ token lên header của tất cả request
            restConnector.defaults.headers['Authorization'] = "Bearer " + res.data.accessToken;

            history.push('./');
        }).catch(error => {
            console.log(error.response.data);
            alert('Lỗi: ' + error.response.data)
        })
    }
};

//Lấy dữ liệu người dùng trên api
export const userDetail = (userAccess) => {
    return dispatch => {
        restConnector({
            method: 'POST',
            url: '/api/quanlynguoidung/thongtintaikhoan',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(settings.token),
            },
            data: {
                "taiKhoan": userAccess,
            }
        }).then(res => {
            console.log(res.data);
            //Đăng nhập thành công => Lưu thông tin user và token vào localstorage để request về những api yêu cầu token
            localStorage.removeItem("userProfile");
            localStorage.setItem(settings.userProfile, JSON.stringify(res.data));

            //Lưu data lên store để render lại giao diện header
            dispatch(reduxAction(UPDATE_USER_INFO, res.data.taiKhoan));

            //bỏ token lên header của tất cả request

        }).catch(error => {
            console.log(error.response.data);
        })
    }
};

//Cập nhật dữ liệu người dùng
export const userUpdateAction = (userProfile, history) => {
    return dispatch => {
        //Gọi ajax backend thông qua api đưa data userProfile về server
        restConnector({
            method: 'PUT',
            url: '/api/quanlynguoidung/capnhatthongtinnguoidung',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(settings.token),
            },
            data: userProfile,
        }).then(res => {
            console.log(res.data);
            // localStorage.removeItem(settings.userProfile);
            localStorage.setItem(settings.userProfile, JSON.stringify(res.data));
            //Lưu data lên store để render lại giao diện header
            dispatch(reduxAction(USER_INFO, res.data));
            // dispatch(reduxAction(UPDATE_USER, res.data));
            // restConnector.defaults.headers['Authorization'] = "Bearer " + res.data.accessToken;

            // history.push('./');
            alert('User profile is update success!');
        }).catch(error => {
            console.log(error.response.data);
        })
    }
}

//Đăng ký khóa học
export const courseRegisting = (courseRegister) => {
    return dispatch => {
        restConnector({
            method: 'POST',
            url: '/api/quanlykhoahoc/dangkykhoahoc',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(settings.token),
            },
            data: courseRegister,
        }).then(res => {
            console.log(res.data);
            //Đăng nhập thành công => Lưu thông tin user và token vào localstorage để request về những api yêu cầu token
            // localStorage.removeItem("userProfile");
            userDetail(settings.taiKhoan);
            localStorage.setItem(settings.userProfile, JSON.stringify(res.data));

            //Lưu data lên store để render lại giao diện header
            dispatch(reduxAction(ADD_CART_ITEM, res.data.taiKhoan));

            //bỏ token lên header của tất cả request

        }).catch(error => {
            console.log(error.response.data);
        })
    }
};
