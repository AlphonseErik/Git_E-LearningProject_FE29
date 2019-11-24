import { restConnector } from ".";

class CourseService {
    fetchCourse(){
        return restConnector({
            url: "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
            method: "GET"
        })
    }
}

export default CourseService;