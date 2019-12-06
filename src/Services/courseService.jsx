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
            url:'/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc',
            method:"GET"
        })
    }
    fetchDetailKhoaHoc(courseid){
        return restConnector({
            url:`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseid}`,
            method:"GET"
        });
    }
}

export default CourseService;