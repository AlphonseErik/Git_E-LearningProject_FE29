import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchForUserByKey } from '../../../Redux/Action/adminAction';
import ModalPopup from './modalPopup';

function SearchForUser(props) {

    console.log(props.search)

    const [userId, setUserId] = useState('');

    const onHandleSubmit = (e) => {
        e.preventDefault();
        props.dispatch(searchForUserByKey(userId));

    }

    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <input className="form-control" name="searchUser" type="text" placeholder="Search user ..." value={userId}
                    onChange={e => setUserId(e.target.value)} />
                <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2" data-toggle="modal" data-target="#exampleModal"><i className="fa fa-search"></i></span>
                </div>
            </form>
                <ModalPopup/>
        </div>
    )
}

const mapStateToProps = state => ({
    search: state.search,
})

export default connect(mapStateToProps)(SearchForUser);
