import { restConnector } from ".";

class CourseService {
    fetchCourse(){
        return restConnector({
            url: "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
            method: "GET"
        })
    }
    fetchCategory(){
        return restConnector({
            url:'http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc',
            method:"GET"
        })
    }
}

export default CourseService;