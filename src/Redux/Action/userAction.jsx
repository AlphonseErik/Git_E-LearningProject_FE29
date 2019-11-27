import { type, LOGIN } from './actionType';
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
            restConnector.defaults.headers['Authorization'] = "Bearer " + res.data.accessToken

        }).catch(error => {
            console.log(error.promise.data);
        })
    }
}