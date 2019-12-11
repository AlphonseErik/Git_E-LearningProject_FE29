import { restConnector } from "../../Services"
import { settings } from "../../config/settings";

export const addNewUser = () => {
    return dispatch => {
        restConnector({
            method: 'POST',
            url: '/api/quanlynguoidung/themnguoidung',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(settings.token),
            },
            data: 'maKhoaHoc: Golang',
        }).then(res =>{
            console.log(res.data);
        })
    }
}