import React from 'react'
import { TableCell } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import { connect } from 'react-redux';
import { TableRow } from 'material-ui';
import { settings } from '../../../config/settings';

function TableOfUser(props) {

    console.log(props.item);

    let [state, setState] = React.useState({
        userRegisterCourse: {
            maKhoaHoc: '',
            taiKhoan: localStorage.getItem(settings.taiKhoan),
        },
    })

    let onHandleAccept = e => {

    }

    return (
        <TableBody>
            {
                props.usersDetailCourse ? (
                    props.usersDetailCourse.map((item, index) => (
                        <tr key={index}>
                            <td>{item.taiKhoan}</td>
                            <td>{item.biDanh}</td>
                            <td>{item.hoTen}</td>
                            <td>
                                <button className="btn btn-success">Accept</button>
                                <button className="btn btn-danger">Refuse</button>
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
    // cartItem: state.cartItem.courseRegisting,
})

export default connect(mapStateToProps)(TableOfUser);


