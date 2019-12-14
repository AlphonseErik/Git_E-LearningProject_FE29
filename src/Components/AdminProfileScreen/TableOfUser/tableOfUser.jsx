import React from 'react'
import { TableCell } from '@material-ui/core';
import { connect } from 'react-redux';

const TableOfUser = props => {

    return (
        <tbody>
            {
                props.usersDetailCourse ? (
                    props.usersDetailCourse.map((item, index) => (
                        <tr key={index}>
                            <td>{item.taiKhoan}</td>
                            <td>{item.biDanh}</td>
                            <td>{item.hoTen}</td>
                            <td></td>
                        </tr>
                    ))
                ) : (
                        <tr>
                            <td>No User Data</td>
                        </tr>)
            }
        </tbody>
    )
}

const mapStateToProps = state => ({
    usersDetailCourse: state.admin.usersDetailCourse,
})

export default connect(mapStateToProps)(TableOfUser);


