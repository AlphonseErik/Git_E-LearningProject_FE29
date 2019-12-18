import React,{useState} from 'react';
import { connect } from 'react-redux';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title/title';

const GetUserList = props => {

    console.log(props.userDetail);
       const [user,setUser] =useState('');

   
       
    return (
        <div className="container">
            <Title>User List</Title>
            <div className="text-center pb-3 " >
            <input className="form-control"name="searchUser" type="text" placeholder="Tìm tên user ..."></input>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th className="text-center">Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Tele</th>
                        <th>User Code</th>
                    </tr>
                </thead>
                <tbody>
                    {props.userDetail.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="text-center">{item.taiKhoan}</td>
                            <td>{item.hoTen}</td>
                            <td>{item.email}</td>
                            <td>{item.soDt}</td>
                            <td>{item.maLoaiNguoiDung}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    userDetail: state.admin.userDetail,
})

export default connect(mapStateToProps)(GetUserList);
