import React, { useEffect } from "react";
import CourseService from "../../Services/courseService";
import { connect } from "react-redux"
import CourseItem from "../../Components/CourseItem/courseItem";
import classes from './homeStyle.module.scss';
import Category from "../../Components/CategoryItemChoosen/categoryItemChoosen";
import Container from '@material-ui/core/Container';
import SideBar from "../../Layouts/SideBar/SideBar";
import BottomSideBar from "../../Layouts/SideBar/BottomSideBar";
import { userDetail } from "../../Redux/Action/userAction";
import { settings } from "../../config/settings";
import GetStarted from "../../Components/GetStarted/getStarted";
import StudentSay from "../../Components/StudentSay/studentSay";
import Footer from "../../Layouts/Footer/footer";
import FilterSearch from "../../Components/FilterSearch/filterSearch";
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

const courseService = new CourseService();

const HomeScreen = props => {

    useEffect(() => {
        courseService.fetchCourse()
            .then(res => {
                props.dispatch({
                    type: "FETCH_COURSE",
                    payload: res.data,
                }, console.log(res.data));
            })
            .catch(err => {
                console.log(err);
            });
        //Lấy dữ liệu userDetail từ api
        let userAccess = localStorage.getItem(settings.taiKhoan);
        let userProfile = localStorage.getItem("userProfile");
        // let userProfileEdit = localStorage.getItem(settings.userProfileEdit);
        if (userAccess && !userProfile) {
            props.dispatch(userDetail(userAccess));
        }
    }, []);

    console.log("payload home", props.search);

    return (
        <div>
            <SideBar />
            <BottomSideBar />
            {/* <Container maxWidth="lg" > */}
            <div className={classes.home}>
                <div>
                    <div className={classes.home__name}>
                        <h1>The world’s largest selection of courses</h1>
                        <div className={classes.home__p}>
                            <p>Choose from over 100,000 online video </p>
                            <p> with new additions published every month</p>
                        </div>
                    </div>
                    <Category />
                    <FilterSearch />
                    <div  className={classes.giaodiencourse }>
                        <div className="container ">
                            <div className="row " >
                                {/* <OwlCarousel className="owl-theme"
                            loop
                            items={4}
                            autoplay={true}
                            margin={20}

                            autoplayTimeout={5000}
                            nav> */}
                                {/* {
                                  props.courseList.filter(task =>
                                      task.tenKhoaHoc.toLowerCase().indexOf(props.search.toLowerCase()) !== -1
                                  )
                              } */}
                                {props.courseList.filter(item => item.danhMucKhoaHoc.maDanhMucKhoahoc === props.categoryChoosenList).map((item, index) => (
                                    <div key={index}>
                                        <CourseItem item={item} />
                                    </div>
                                ))}
                                {/* </OwlCarousel> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark">
                <GetStarted />
            </div>

            <div className="mt-3">
                <StudentSay />
            </div>
            <Footer />
            {/* </Container> */}
        </div>
    )
}

const mapStateToProps = state => ({
    courseList: state.courseList,
    categoryChoosenList: state.categoryChoosenList,
    credentials: state.user.credentials,
    search: state.search,
});


export default connect(mapStateToProps)(HomeScreen);