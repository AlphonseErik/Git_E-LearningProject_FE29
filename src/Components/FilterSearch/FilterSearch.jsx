import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { SEARCH_COURSE, FETCH_COURSES } from '../../Redux/Action/actionType';
// import CourseService from '../../Services/courseService';
import reduxAction from '../../Redux/Action/action';

// const courseService = new CourseService();

function FilterSearch(props) {

  let [state, setState] = React.useState({
    search: '',
  })

  let handleChange = e => {
    console.log(e.target.name, e.target.value);
    setState({
      [e.target.name]: e.target.value,
    });
  }

  let filterSearch = () => {
    props.dispatch(reduxAction(SEARCH_COURSE, state.search));
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6"></div>
        <div className="col-5">
          <div className="form-group">
            <input
              type="text"
              name="search"
              onChange={handleChange}
              className="form-control"
              placeholder="Tìm tên khóa học"
            />
          </div>
        </div>
        <div className="col-1">
          <button className="btn btn-success" onClick={filterSearch}>Search</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  courseList: state.courseList,
});

export default connect(mapStateToProps)(FilterSearch);