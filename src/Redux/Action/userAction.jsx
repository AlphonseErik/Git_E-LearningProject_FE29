import { type, LOGIN, UPDATE_USER } from './actionType';
import { settings } from '../../config/settings';
import reduxAction from "./action";
import { restConnector } from '../../Services';

export const userLoginAction = (userLogin, history) => {
    return dispatch => {
        //Gọi ajax backend thông qua api đưa data userLogin về server
        restConnector({
            method: 'POST',
            url: '/api/quanlynguoidung/dangnhap',
            data: userLogin,
        }).then(res => {
            console.log(res.data);
            //Đăng nhập thành công => Lưu thông tin user và token vào localstorage để request về những api yêu cầu token
            localStorage.setItem(settings.userLogin, JSON.stringify(res.data));
            localStorage.setItem(settings.token, res.data.accessToken);
            // localStorage.setItem(settings.maNhom, res.data.maNhom);
            // localStorage.setItem(settings.maLoaiNguoiDung, res.data.maLoaiNguoiDung);

            //Lưu data lên store để render lại giao diện header
            dispatch(reduxAction(LOGIN, res.data));

            //bỏ token lên header của tất cả request
            restConnector.defaults.headers['Authorization'] = "Bearer " + res.data.accessToken;

            history.push('./');
        }).catch(error => {
            console.log(error.response.data);
        })
    }
}

export const userUpdateAction = (userProfile, history) => {
    return dispatch => {
        //Gọi ajax backend thông qua api đưa data userLogin về server
        restConnector({
            method: 'PUT',
            url: '/api/quanlynguoidung/capnhatthongtinnguoidung',
            data: userProfile,
        }).then(res => {
            console.log(res.data);

            //Lưu data lên store để render lại giao diện header
            dispatch(reduxAction(UPDATE_USER, res.data));

            history.push('./home');
        }).catch(error => {
            console.log(error.response.data);
        })
    }
}