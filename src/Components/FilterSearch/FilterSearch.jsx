import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SEARCH_COURSE } from '../../Redux/Action/actionType';

class FilterSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }
  handleChange = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  filterSearch = (payload) => {
    this.props.dispatch({
      type: SEARCH_COURSE,
      payload
    })
  }

  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-5">
            <div className="form-group">
              <input
                type = "text"
                name = "search"
                onChange = {this.handleChange}
                className = "form-control"
                placeholder = "Tìm tên khóa học"
              />
            </div>
          </div>
          <div className="col-1">
            <button className="btn btn-success" onClick={() => this.filterSearch(this.state.search)}>Tìm</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  courseList: state.courseList
});

export default connect(mapStateToProps)(FilterSearch);