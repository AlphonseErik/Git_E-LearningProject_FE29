import React from 'react'
import { connect } from 'react-redux';
import { settings } from '../../../config/settings';
import { courseRegistingAdmin } from '../../../Redux/Action/adminAction';
import AcceptCourseForUser from './acceptCourseForUser';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function TableOfUser(props) {

    return (
        <React.Fragment>
            {
                (props.usersDetailCourse) ? (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>USERNAME</TableCell>
                                <TableCell>FULL NAME</TableCell>
                                <TableCell>ACTION</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.usersDetailCourse.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.taiKhoan}</TableCell>
                                    <TableCell>{item.hoTen}</TableCell>
                                    <TableCell>
                                        <AcceptCourseForUser item={item.taiKhoan} maKhoaHoc={props.item} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        No User Data
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    )}
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    usersDetailCourse: state.admin.usersDetailCourse,
})

export default connect(mapStateToProps)(TableOfUser);


