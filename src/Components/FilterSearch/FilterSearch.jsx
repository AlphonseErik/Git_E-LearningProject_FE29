import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import reduxAction from '../../Redux/Action/action';
import { SEARCH_COURSE } from '../../Redux/Action/actionType';
import { NavLink } from 'react-router-dom';

function FilterSearch(props) {

  console.log('hihi', props.item);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = props.item.filter(items =>
      items.tenKhoaHoc.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
    );
    setSearchResults(results);

  }, [searchTerm]);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6">
          <form className="form-group" action={`/coursedetail/${searchTerm}`} method="get">
            <input type="text" name="search" value={searchTerm} onChange={handleChange} className="form-control" placeholder="Search for course..." list="search"/>
            {searchTerm && (
              <datalist id="search">
                {searchResults.map((item, index) => (
                  <option value={item.maKhoaHoc} key={index}>
                    {item.tenKhoaHoc}
                  </option>
                ))}
              </datalist>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default connect()(FilterSearch);