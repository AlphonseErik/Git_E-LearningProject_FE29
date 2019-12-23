import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from '../../Components/AdminProfileScreen/ListItem/listItems';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Chart from '../../Components/AdminProfileScreen/Chart/chart';
import Deposits from '../../Components/AdminProfileScreen/Deposit/deposit';
import Orders from '../../Components/AdminProfileScreen/UserOrders/orders';
import AddNewUser from '../../Components/AdminProfileScreen/AdminAddNewUser/adminAddNewUser';
import { connect } from 'react-redux';
import { settings } from '../../config/settings';
import { userDetail } from '../../Redux/Action/userAction';
import { getUserInfor } from '../../Redux/Action/adminAction';
import UserService from '../../Services/userService';
import { GET_ALL_USER_INFOR } from '../../Redux/Action/actionType';
import GetUserList from '../../Components/AdminProfileScreen/GetUserList/getUserList';
import AdminAddNewCourse from '../../Components/AdminProfileScreen/AdminAddNewCourse/adminAddNewCourse';
import AdminAddNewUser from '../../Components/AdminProfileScreen/AdminAddNewUser/adminAddNewUser';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

const userService = new UserService();

function AdminScreen(props) {

    useEffect(() => {
        //Lấy dữ liệu userDetail từ api
        const userLoginStr = localStorage.getItem('userLogin');
        const userAccessToken = localStorage.getItem('accessToken');
        const userRightStr = localStorage.getItem('userRight');
        if (userLoginStr && userAccessToken && userRightStr === "GV") {
            let userAccess = localStorage.getItem(settings.taiKhoan);
            if (userAccess) {
                props.dispatch(userDetail(userAccess));
                props.dispatch(getUserInfor(userRightStr));
            }
        }
    }, []);

    let item = props.courseList;
    // console.log('heloo', item);

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawer = () => {
        setOpen(!open);
    };

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (

        <div className={classes.root}>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}>
                <div className={classes.toolbarIcon}>
                    {!open ? (<IconButton onClick={handleDrawer}>
                        <ChevronRightIcon />
                    </IconButton>) : (<IconButton onClick={handleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>)}
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <Chart />
                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <Deposits />
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12} md={8} lg={8}>
                            <Paper className={classes.paper}>
                                <Orders item={item} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Paper className={classes.paper}>
                                <div className="row">
                                    <div className="col-6">
                                        <AdminAddNewUser />
                                    </div>
                                    <div className="col-6">
                                        <AdminAddNewCourse />
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <GetUserList />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}

const mapStateToProps = state => ({
    courseList: state.courseList,
})

export default connect(mapStateToProps)(AdminScreen);