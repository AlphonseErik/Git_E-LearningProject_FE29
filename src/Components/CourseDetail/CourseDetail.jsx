import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchCourseDetail } from '../../Redux/Action/action';
import  classes from './CourseDetail.module.scss';



 class CourseDetail extends Component {
    render() {
        console.log("detail",this.props.course);
        let  {hinhAnh,tenKhoaHoc,maKhoaHoc,moTa,biDanh,soLuongHocVien,ngayTao} =this.props.course;
        return (
            <div>
            <div className={classes.landingPage}>
            <div className="container">   
                    <div className="row">
                        <div className="col-8">
                        </div>
                        <div className="col-2">
                            <div className={classes.landingPage_gift}>
                                <i className="fa fa-gift"></i>
                                <span className="ml-2 mb-2">Gift This Course</span>
                            </div>                 
                        </div>
                        <div className="col-2">
                            <div className={classes.landingPage_head}>
                                <i className="fa fa-heart"></i>
                                <span className="ml-2">WistList</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                         <div className="col-8">
                             <div className="tenKhoaHoc">
                                <h2>{tenKhoaHoc}</h2>
                             </div>
                             <div className="moTa">
                                <h5>{moTa}</h5>
                             </div>  
                             <div className={classes.classstar}>
                                 <i className="fa fa-star"/>
                                 <i className="fa fa-star"/>
                                 <i className="fa fa-star"/>
                                 <i className="fa fa-star"/>
                                <span className="ml-2">4.7 (2000 ratings)</span>
                                 <span className="ml-3">{soLuongHocVien} Học viên đăng kí</span>
                                 </div>        
                              <p className="mt-2">{ngayTao}</p>

                         </div>
                    </div>
               </div>

               
            </div>
             <div className="whatYouLearn">
                <div className="row">
                    <div className="col-8">

                    </div>
                    <div className="col-4">
                         sdlkfnsdflsdmflsd
                    </div>

                </div>

             </div>

            </div>
           
        )
    }
    componentDidMount(){
         //Lấy tham số mã khóa học từ url
            const {courseid} = this.props.match.params;
            // const courseid = this.props.match.params.courseid;
            //call api lấy chi tiết khoá học
             this.props.dispatch(fetchCourseDetail(courseid))

    }
}
const mapStateToProps = state =>({course:state.CourseDetailReducer})
export default connect(mapStateToProps)(CourseDetail);