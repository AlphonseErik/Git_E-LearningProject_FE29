import { restConnector } from "../../Services"
import { settings } from "../../config/settings";

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