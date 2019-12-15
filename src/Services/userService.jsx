import { restConnector } from ".";

class UserService {
    fetchUserProfile(){
        return restConnector({
            url: "api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
            method: "GET",
        })
    }
}

export default UserService;