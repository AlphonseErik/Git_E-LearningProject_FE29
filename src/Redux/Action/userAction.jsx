import { type, LOGIN, USER_INFO, SIGNUP, UPDATE_USER_INFO, ADD_CART_ITEM, COURSE_REGISTING, LOGIN_ADMIN } from './actionType';
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
            alert('Create Account Success!! ');

            history.push('./login');
        }).catch(error => {
            console.log(error.response.data);
            alert('Error: ' + error.response.data);
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
            localStorage.setItem(settings.maLoaiNguoiDung, res.data.maLoaiNguoiDung);

            //Lưu data lên store để render lại giao diện header

            //bỏ token lên header của tất cả request
            restConnector.defaults.headers['Authorization'] = "Bearer " + res.data.accessToken;
            if (localStorage.getItem(settings.maLoaiNguoiDung === "HV")) {
                localStorage.setItem(settings.userLogin, JSON.stringify(res.data));
                localStorage.setItem(settings.token, res.data.accessToken);
                localStorage.setItem(settings.taiKhoan, res.data.taiKhoan);
                dispatch(reduxAction(LOGIN, res.data));
                history.push('./');
                return;
            }
            localStorage.setItem(settings.userLogin, JSON.stringify(res.data));
            localStorage.setItem(settings.token, res.data.accessToken);
            localStorage.setItem(settings.taiKhoan, res.data.taiKhoan);
            dispatch(reduxAction(LOGIN_ADMIN, res.data));
            dispatch(reduxAction(LOGIN, res.data));
            history.push('./admin');
        }).catch(error => {
            console.log(error.response.data);
            alert('Error: ' + error.response.data)
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
            dispatch(reduxAction(USER_INFO, res.data.taiKhoan));

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
export const courseRegisting = (courseRegister, history) => {
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
            dispatch(reduxAction(UPDATE_USER_INFO, res.data));

            alert('Register Success!')
            history.push('./user');
        }).catch(error => {
            console.log(error.response.data);
        })
    }
};

//Huỷ khoá học
export const courseCanceling = (courseCanceling, history) => {
    return dispatch => {
        restConnector({
            method: 'POST',
            url: '/api/quanlykhoahoc/huyghidanh',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(settings.token),
            },
            data: courseCanceling,
        }).then(res => {
            console.log(res.data);
            //Đăng nhập thành công => Lưu thông tin user và token vào localstorage để request về những api yêu cầu token
            // localStorage.removeItem("userProfile");
            // userDetail(settings.taiKhoan);
            userDetail(localStorage.getItem(settings.taiKhoan));
            // localStorage.setItem(settings.userProfile, JSON.stringify(res.data));

            //Lưu data lên store để render lại giao diện header
            dispatch(reduxAction(COURSE_REGISTING, res.data));
            dispatch(reduxAction(UPDATE_USER_INFO, res.data));

            alert('Cancel Success!')
            history.push('./user');
        }).catch(error => {
            console.log(error.response.data);
        })
    }
};
