import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCourseDetail } from '../../Redux/Action/action';
import classes from './courseDetailStyle.module.scss';
import CustomSeparator from '../CustomSeparator/customSeparator';
import { ADD_CART_ITEM } from '../../Redux/Action/actionType';

const CourseDetail = props => {

    useEffect(() => {
        //Lấy tham số mã khóa học từ url
        const { courseid } = props.match.params;
        // const courseid = this.props.match.params.courseid;
        //call api lấy chi tiết khoá học
        props.dispatch(fetchCourseDetail(courseid))
    }, []);

    const addToCart = (khoahoc) => {
        props.dispatch({
            type: ADD_CART_ITEM,
            payload: khoahoc
        })
    };

    console.log("detail", props.course);

    let { hinhAnh, tenKhoaHoc, maKhoaHoc, moTa, biDanh, soLuongHocVien, ngayTao, danhMucKhoaHoc } = props.course;

    return (
        <div>
            <div className={classes.headerDetail}>
                <div className="container pt-2">
                    <CustomSeparator content={props.course} />
                </div>
            </div>
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
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
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
                        <div className={classes.right_course}>
                            <div className="cartRight text-center pt-1">
                                <img src={hinhAnh} />
                            </div>
                            <div className="text-danger text-center">{tenKhoaHoc}</div>
                            <div className="container">
                                <div className={classes.cartRightItem}>
                                    <h5>{moTa}</h5>
                                    <h2>$9.99</h2>
                                    <button className="btn btn-danger" onClick={() => { addToCart(props.course) }}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ course: state.courseDetail });

export default connect(mapStateToProps)(CourseDetail);