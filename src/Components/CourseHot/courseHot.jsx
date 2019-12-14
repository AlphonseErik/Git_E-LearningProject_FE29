import React, { Component } from 'react';
import classes from './course.module.scss';

export default class CourseHot extends Component {
    render() {
        return (
            <div className={classes.tong}>
                <h4>Khóa học hot 2019</h4>
                 <div className="container-fluid">
            <div className="row mt-3">
              <div className="col-6 text-right">
                  <div className={classes.classreact}>
               <img src="http://elearning0706.cybersoft.edu.vn/hinhanh/sad.png "width={400}height={300}/>
               </div>
              </div>
              <div className="col-6">
              <div >
                 <h2>React Front To Back 2019</h2>
                 <p>Tìm hiểu Phản ứng hiện đại 16.8+ Bao gồm Móc, API ngữ cảnh, MERN đầy đủ & Redux bằng cách xây dựng các dự án thực tế</p>
                 <p>Mua 1 lần học cả đời</p>
               </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mt-3">
          <div className={classes.classangular}>
           <div className="row ">
                <div className="col-6">
                   <div className={classes.angulartext} >
                       <h3>Angular Styling & Animations (for Angular 2+)</h3>
                      <p>Dành cho Angular 2+: Tìm hiểu cách sử dụng Kiểu động và Ảnh động mạnh mẽ để tạo Ứng dụng góc đẹp</p>
                   </div>
                </div>
                <div className="col-6">
                   <div className="text-right">
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
