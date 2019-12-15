import React from 'react'
import { TableCell } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import { connect } from 'react-redux';
import { TableRow } from 'material-ui';
import { settings } from '../../../config/settings';
import { courseRegistingAdmin } from '../../../Redux/Action/adminAction';
import AcceptCourseForUser from './AcceptCourseForUser/acceptCourseForUser';

function TableOfUser(props) {

    return (
        <TableBody>
            {
                (props.usersDetailCourse) ? (
                    props.usersDetailCourse.map((item, index) => (
                        <tr key={index}>
                            <td align="center">{index + 1}</td>
                            <td>{item.taiKhoan}</td>
                            <td>{item.biDanh}</td>
                            <td>{item.hoTen}</td>
                            <td>
                                {/* <Button className="btn btn-success">Accept</Button> */}
                                {/* <button className="btn btn-danger">Refuse</button> */}
                                <AcceptCourseForUser item={item.taiKhoan} maKhoaHoc={props.item} />
                            </td>
                        </tr>
                    ))
                ) : (
                        <tr>
                            <td>No User Data</td>
                        </tr>)
            }
        </TableBody>
    )
}

const mapStateToProps = state => ({
    usersDetailCourse: state.admin.usersDetailCourse,
})

export default connect(mapStateToProps)(TableOfUser);


