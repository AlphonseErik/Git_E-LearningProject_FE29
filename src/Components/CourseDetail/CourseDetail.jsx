import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCourseDetail } from '../../Redux/Action/action';
import classes from './courseDetailStyle.module.scss';
import CustomSeparator from '../CustomSeparator/customSeparator';
import { ADD_CART_ITEM } from '../../Redux/Action/actionType';
import LoadingScreen from '../../Screens/LoadingScreen/loadingScreen';

const CourseDetail = props => {

    let [state, setState] = React.useState({
        isLoading: true,
    });

    let timerHandle = () => {
        if (timerHandle) {
            clearTimeout(timerHandle);
            timerHandle = 0;
        }
    }

    useEffect(() => {
        //Lấy tham số mã khóa học từ url
        const { courseid } = props.match.params;
        // const courseid = this.props.match.params.courseid;
        //call api lấy chi tiết khoá học
        props.dispatch(fetchCourseDetail(courseid));
        timerHandle = setTimeout(() => setState({ isLoading: false }), 500);
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
            {state.isLoading ? (
                <LoadingScreen />
            ) : (
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
                                <div className={classes.textcourse}>

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
                        </div>
                        <div className="whatYouLearn">
                            <div className="row">
                                <div className="col-8 col-lg-8 col-md-8 col-sm-6 ">
                                </div>
                                <div className="col-4 col-lg-4 col-md-4 col-sm-6 ">
                                    <div className={classes.right_course}>
                                        <div className="cartRight text-center pt-1">
                                            <img src={hinhAnh} />
                                        </div>
                                        <h1 className="text-danger">{tenKhoaHoc}</h1>
                                        <div className="container">
                                            <div className={classes.cartRightItem}>
                                                <h2 className="text-right">25$</h2>
                                                <button className="btn btn-danger" onClick={() => { addToCart(props.course) }}>Add To Cart</button>

                                            </div>
                                            <div className="container">
                                                <div className={classes.righttext}>
                                                    <h5>This Coure in clude</h5>
                                                    <i className="incentives__icon incentives__icon--bold udi udi-video-design" />
                                                    <div className="pl-3">
                                                        <p>7 hours on-demand video</p>
                                                        <p> 3 articles</p>
                                                        <p>4 downloadable resources</p>
                                                        <p>Full lifetime access</p>
                                                        <p> Access on mobile and TV</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}

const mapStateToProps = state => ({ course: state.courseDetail });

export default connect(mapStateToProps)(CourseDetail);