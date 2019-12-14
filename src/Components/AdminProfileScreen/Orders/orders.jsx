import React, { useEffect } from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title/title';
import TableOfUser from '../TableOfUser/tableOfUser';
import { connect } from 'react-redux';
import { getUserRegistCourse } from '../../../Redux/Action/adminAction';

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

function Orders(props) {

    let [state, setState] = React.useState({
        maKhoaHoc: '',
    })

    const onHandleChange = (e) => {
        let value = e.target.value;
        setState({
            maKhoaHoc: value
        });
    }

    const onButtonChange = (e) => {
        e.preventDefault();
        let valid = true;
        for (let valueNotFind in state) {
            if (state[valueNotFind] === "") {
                valid = false;
            }
        }
        if (valid) {
            props.dispatch(getUserRegistCourse(state.maKhoaHoc, props.history));
        }
        else {
            alert('Item must be selected!');
        }
    }

    const classes = useStyles();

    return (
        <React.Fragment>
            <Title>Recent Orders</Title>
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Code Name</th>
                        <th>Full Name</th>
                        <th>
                            <select onChange={e => onHandleChange(e)}>
                                <option></option>
                                {props.item.map((item, index) => (
                                    <option key={index} value={item.maKhoaHoc}>{item.tenKhoaHoc}</option>
                                ))}
                            </select>
                        </th>
                        <th>
                            <button className="btn btn-danger" onClick={onButtonChange}>GET DATA</button>
                        </th>
                    </tr>
                </thead>
                <TableOfUser />
            </table>
        </React.Fragment>
    );
}

export default connect()(Orders);

{/* <React.Fragment>
    <Title>Recent Orders</Title>
    <Table size="small">
        <TableHead>
            <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Ship To</TableCell>
                <TableCell>Payment Method</TableCell>
                <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map(row => (
                <TableRow key={row.id}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.shipTo}</TableCell>
                    <TableCell>{row.paymentMethod}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
            See more orders
        </Link>
    </div>
</React.Fragment> */}