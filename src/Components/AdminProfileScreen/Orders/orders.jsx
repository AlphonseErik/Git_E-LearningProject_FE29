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
import { FormControl, InputLabel, Select, Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(0),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(),
    },
}));

function Orders(props) {

    let [state, setState] = React.useState({
        maKhoaHoc: '',
    })

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

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
            <Table className="table">
                <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell>Code Name</TableCell>
                        <TableCell>Full Name</TableCell>
                        <TableCell>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel ref={inputLabel}>
                                    Class Name
                                </InputLabel>
                                <Select
                                    native
                                    value={state.age}
                                    onChange={e => onHandleChange(e)}
                                    labelWidth={labelWidth}
                                    inputProps={{
                                        name: 'maKhoaHoc',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option></option>
                                    {props.item.map((item, index) => (
                                        <option key={index} value={item.maKhoaHoc}>{item.tenKhoaHoc}</option>
                                    ))}
                                </Select>
                            </FormControl>
                            {/* <select onChange={e => onHandleChange(e)}>
                                <option></option>
                                {props.item.map((item, index) => (
                                    <option key={index} value={item.maKhoaHoc}>{item.tenKhoaHoc}</option>
                                ))}
                            </select> */}
                        </TableCell>
                        <TableCell>
                            <Button variant="contained" color="primary" onClick={onButtonChange}>GET DATA</Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableOfUser item={props.item}/>
            </Table>
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