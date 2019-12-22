import React, { useEffect } from "react";
import CourseService from "../../Services/courseService";
import { connect } from "react-redux";
import CourseItem from "../../Components/CourseItem/courseItem";
import classes from "./homeStyle.module.scss";
import Category from "../../Components/CategoryItemChoosen/categoryItemChoosen";
import Container from "@material-ui/core/Container";
import SideBar from "../../Layouts/SideBar/SideBar";
import BottomSideBar from "../../Layouts/SideBar/BottomSideBar";
import { userDetail } from "../../Redux/Action/userAction";
import { settings } from "../../config/settings";
import GetStarted from "../../Components/GetStarted/getStarted";
import StudentSay from "../../Components/StudentSay/studentSay";
import Footer from "../../Layouts/Footer/footer";
import FilterSearch from "../../Components/FilterSearch/filterSearch";
import Sale from "../../Components/Sale/sale";
import CourseHot from "../../Components/CourseHot/courseHot";
import { FETCH_COURSES } from "../../Redux/Action/actionType";
import backToTop from "../../Components/BacktoTop/backToTop";
import CountdownTimer from '../../Components/CountdownTimer/CountdownTimer';
import LoadingScreen from "../LoadingScreen/loadingScreen";


// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

const courseService = new CourseService();

const HomeScreen = props => {

  let [state, setState] = React.useState({
    isLoading: true,
  });

  // let timerHandle = () => {
  //   if (timerHandle.current) {
  //     clearTimeout(timerHandle);
  //     timerHandle = 0;
  //   }
  // }

  useEffect(() => {
    courseService
      .fetchCourse()
      .then(res => {
        props.dispatch(
          {
            type: FETCH_COURSES,
            payload: res.data
          },
          console.log(res.data)
        );
      })
      .catch(err => {
        console.log(err);
      });
    var timerHandle = setTimeout(() => setState({ isLoading: false }), 400);
    //Lấy dữ liệu userDetail từ api
    let userAccess = localStorage.getItem(settings.taiKhoan);
    let userProfile = localStorage.getItem("userProfile");
    // let userProfileEdit = localStorage.getItem(settings.userProfileEdit);
    if (userAccess && !userProfile) {
      props.dispatch(userDetail(userAccess));
    }
  }, [props]);

  console.log("search_home", props.courseList);

  return (
    <div>
      {state.isLoading ? (
        <LoadingScreen />
      ) : (
          <div>
            <SideBar />
            <BottomSideBar />
            {/* <Container maxWidth="lg" > */}
            <div className={classes.home}>
              <div>
                <div className={classes.home__name}>
                  <div className={classes.classh1}>
                    <CountdownTimer />
                  </div>
                  {/* <div className={classes.home__p}> */}
                  {/* </div> */}
                </div>
                <div className={classes.classsale}>
                  <div className="container">
                    <Sale />
                  </div>
                </div>
                <CourseHot />
                <Category />
                <FilterSearch item={props.courseList} />
                <div>
                  <div className="container ">
                    <div className="row ">
                      {/* {props.courseList.filter(
                  task =>
                    task.tenKhoaHoc
                      .toLowerCase()
                      .indexOf(props.search.toLowerCase()) !== -1
                )}, */}
                      {props.courseList
                        .filter(
                          item =>
                            item.danhMucKhoaHoc.maDanhMucKhoahoc ===
                            props.categoryChoosenList
                        )
                        .map((item, index) => (
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
            {/* <backToTop /> */}
            <div className="mt-3">
              <StudentSay />
            </div>
            <Footer />
            {/* </Container> */}
          </div>
        )}
    </div>
  );
};

const mapStateToProps = state => ({
  courseList: state.courseList,
  categoryChoosenList: state.categoryChoosenList,
  credentials: state.user.credentials,
});

export default connect(mapStateToProps)(HomeScreen);
