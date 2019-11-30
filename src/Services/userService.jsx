import { restConnector } from ".";

class UserService {
    fetchUserProfile(){
        return restConnector({
            url: "/api/quanlynguoidung/laythongtintaikhoan",
            method: "POST"
        })
    }
}

export default UserService;