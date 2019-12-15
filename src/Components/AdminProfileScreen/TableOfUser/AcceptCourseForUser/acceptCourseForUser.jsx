import React from 'react'
import { courseRegistingAdmin } from '../../../../Redux/Action/adminAction';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
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

const AcceptCourseForUser = props => {

    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    let [state, setState] = React.useState({
        userRegisterCourse: {
            maKhoaHoc: props.maKhoaHoc,
            taiKhoan: props.item,
        },
        onBoolean: true,
    });

    let handleSubmit = (e) => {
        e.preventDefault();
        let valid = true
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = setTimeout(() => {
                setSuccess(true);
                setLoading(false);
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
            }, 2000);
        }
    }

    return (
        <div>
            {
                state.onBoolean ? (
                    <div className={classes.root}>
                        <div className={classes.wrapper}>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={buttonClassname}
                                disabled={loading}
                                onClick={handleSubmit}>
                                Accept
                            </Button>
                            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                        </div>
                    </div>
                ) : (

                        <Button color="primary" disabled className="text-success">Registed Success!!</Button>
                    )
            }
        </div>
    )
}

export default connect()(AcceptCourseForUser);