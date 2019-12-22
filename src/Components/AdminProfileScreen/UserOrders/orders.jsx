import React, { useEffect } from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title/title';
import TableOfUser from './tableOfUser';
import { connect } from 'react-redux';
import { getUserRegistCourse } from '../../../Redux/Action/adminAction';
import { FormControl, InputLabel, Select, Button } from '@material-ui/core';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(0),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(0),
    },
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

function Orders(props) {
    const classesLoad = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();

    const buttonClassname = clsx({
        [classesLoad.buttonSuccess]: success,
    });

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

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
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = setTimeout(() => {
                setLoading(false);
                for (let valueNotFind in state) {
                    if (state[valueNotFind] === "") {
                        valid = false;
                        setSuccess(false);
                    }
                }
                if (valid) {
                    props.dispatch(getUserRegistCourse(state.maKhoaHoc, props.history));
                    setSuccess(true);
                }
                else {
                    alert('Item must be selected!');
                }
            }, 1000);
        }
    }

    const classes = useStyles();

    return (
        <React.Fragment>
            <Title>Recent Orders</Title>
            {/* <Table size="medium">
                <TableHead>
                    <TableRow> */}
            {/* <TableCell> */}
            <div className="row">
                <div className="col-9">
                    <FormControl variant="outlined" className={classes.formControl} fullWidth>
                        <InputLabel required ref={inputLabel}>
                            Class Name
                                </InputLabel>
                        <Select
                            native
                            onChange={e => onHandleChange(e)}
                            labelWidth={labelWidth}
                        // inputProps={{
                        //     name: 'maKhoaHoc',
                        //     id: 'outlined-age-native-simple',
                        // }}
                        >
                            <option></option>
                            {props.item.map((item, index) => (
                                <option key={index} value={item.maKhoaHoc}>{item.tenKhoaHoc}</option>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="col-3">
                    <div className={classesLoad.root}>
                        <div className={classesLoad.wrapper}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={buttonClassname}
                                disabled={loading}
                                onClick={onButtonChange}>GET DATA</Button>
                            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                        </div>
                    </div>
                </div>
            </div>

            {/* <select onChange={e => onHandleChange(e)}>
                                <option></option>
                                {props.item.map((item, index) => (
                                    <option key={index} value={item.maKhoaHoc}>{item.tenKhoaHoc}</option>
                                ))}
                            </select> */}
            {/* </TableCell>
                        <TableCell> */}

            {/* </TableCell> */}
            {/* </TableRow>
                </TableHead> */}
            <TableOfUser item={state.maKhoaHoc} />
            {/* </Table> */}
        </React.Fragment>
    );
}

export default connect()(Orders);