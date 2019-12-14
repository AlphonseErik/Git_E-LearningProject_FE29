import React, { Component } from 'react';
import classes from './course.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default class CourseHot extends Component {
    render() {
        return (
            <div className={classes.tong}>
                 <div className="container">
            <div className="row mt-3">
              <div className="col-6 text-right" data-aos="zoom-out-up">


                 <div className={classes.classreact}>
               <img src="http://elearning0706.cybersoft.edu.vn/hinhanh/sad.png "width={400}height={300}/>
               </div>
               </div>
              <div className="col-6" >
              <div >
                 <h2 data-aos="zoom-out-up" > React Front To Back 2019</h2>
                 <p data-aos="zoom-out-up">Tìm hiểu Phản ứng hiện đại 16.8+ Bao gồm Móc, API ngữ cảnh, MERN đầy đủ & Redux bằng cách xây dựng các dự án thực tế</p>
                 <p data-aos="zoom-out-up">Mua 1 lần học cả đời</p>
               </div>
              </div>
          </div>
          </div>


          <div className="container mt-3">
          <div className={classes.classangular}>
           <div className="row ">
                <div className="col-6">
                   <div className={classes.angulartext} >
                       <h3 data-aos="zoom-out-up">Angular Styling & Animations (for Angular 2+)</h3>
                      <p data-aos="zoom-out-up">Dành cho Angular 2+: Tìm hiểu cách sử dụng Kiểu động và Ảnh động mạnh mẽ để tạo Ứng dụng góc đẹp</p>
                   </div>
                </div>
                <div className="col-6">
                   <div className="text-right" data-aos="zoom-out-up">
                       <img src="http://elearning0706.cybersoft.edu.vn/hinhanh/angular.jpg" width={600}height={300} />
                   </div>
                </div>
                </div>
           </div>
          </div>
            </div>
        )
    }
}
