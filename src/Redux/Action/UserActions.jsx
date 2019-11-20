import { type, LOGIN } from './type';
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
            // headers : {
            //     "Authorization": "Bearer " +  JSON.parse(localStorage.getItem(settings.token))
            // }
        }).then(res => {
            console.log(res.data);
            //Đăng nhập thành công => Lưu thông tin user và token vào localstorage để request về những api yêu cầu token
            localStorage.setItem(settings.userLogin, JSON.stringify(res.data));
            localStorage.setItem(settings.token, res.data.accessToken);

            //Lưu data lên store để render lại giao diện header
            dispatch(reduxAction(LOGIN, res.data));

            //bỏ token lên header của tất cả request
            restConnector.defaults.headers['Authorization'] = "Bearer " + res.data.accessToken

            //Chuyển tới trang home
            history.push('./');

        }).catch(error => {
            console.log(error.response.data);
        })
    }
}