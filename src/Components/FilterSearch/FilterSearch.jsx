import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { SEARCH_COURSE, FETCH_COURSES } from '../../Redux/Action/actionType';
// import CourseService from '../../Services/courseService';
import reduxAction from '../../Redux/Action/action';

// const courseService = new CourseService();

    class FilterSearch extends  Component {
   constructor(props){
     super(props);
     this.state ={
       search:''
     }
   }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    },()=>this.props.dispatch(reduxAction(SEARCH_COURSE, this.state.search))
    
    );
  }

  // let filterSearch = () => {
  //   props.dispatch(reduxAction(SEARCH_COURSE, state.search));
  // }
render(){
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6">
          <div className="form-group">
            <input
              type="text"
              name="search"
              // value={this.state.search}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Tìm  khóa học"
            />
          </div>
        </div>
       
      </div>
    </div>
  );
}
    }
const mapStateToProps = state => ({
  courseList: state.courseList,
});

export default connect(mapStateToProps)(FilterSearch);