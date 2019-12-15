import React from 'react'
import { Button } from '@material-ui/core';
import { courseRegistingAdmin } from '../../../../Redux/Action/adminAction';
import { connect } from 'react-redux';

const AcceptCourseForUser = props => {

    // console.log('lele', props.item);
    // console.log('haa', props.maKhoaHoc);

    let [state, setState] = React.useState({
        userRegisterCourse: {
            maKhoaHoc: props.maKhoaHoc,
            taiKhoan: props.item,
        },
        onBoolean: true,
    })

    let handleSubmit = (e) => {
        e.preventDefault();
        let valid = true
        setState({
            isBoolean: false,
        });
        if (valid) {
            console.log(state.userRegisterCourse)
            props.dispatch(courseRegistingAdmin(state.userRegisterCourse, props.history));
        }
        else {
            alert('Invalid input!!');
        }
    }

    return (
        <div>
            {
                state.onBoolean ? (
                    <Button variant="contained" color="secondary" onClick={handleSubmit}>
                        Accept
                    </Button>
                ) : (

                    <Button color="primary" disabled>Registed</Button>
                    )
            }
        </div>
    )
}

const mapStateToProps = state => ({
    // usersDetailCourse: state.admin.usersDetailCourse,
})

export default connect(mapStateToProps)(AcceptCourseForUser);