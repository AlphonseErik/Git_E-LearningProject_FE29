import React, { useEffect } from "react";
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import UserProfile from "../../Components/UserProfileScreen/UserProfile/userProfile";
// import { Button, Link } from "@material-ui/core";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserCart from "../../Components/UserProfileScreen/UserCartProfile/userCartProfile";
import { connect } from "react-redux";
import { userDetail } from "../../Redux/Action/userAction";
import { settings } from "../../config/settings";
import Footer from "../../Layouts/Footer/Footer";
import LoadingScreen from "../LoadingScreen/loadingScreen";
import { Redirect } from "react-router-dom";
import UserProfileChangePassword from "../../Components/UserProfileScreen/UserProfileChangePassword/userProfileChangePassword";

function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <Typography component="div" role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',

    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        marginTop: 50

    },
}));
const UserScreen = props => {

    let [state, setState] = React.useState({
        isLoading: true,
    });

    let timerHandle = () => {
        if (timerHandle) {
            clearTimeout(timerHandle);
            timerHandle = 0;
        }
    }

    useEffect(() => {
        //Lấy dữ liệu userDetail từ api
        const userLoginStr = localStorage.getItem('userLogin');
        const userAccessToken = localStorage.getItem('accessToken');
        const userRightStr = localStorage.getItem('userRight');
        if (userLoginStr && userAccessToken && userRightStr) {
            let userAccess = localStorage.getItem(settings.taiKhoan);
            // let userProfile = localStorage.getItem("userProfile");
            let userProfileEdit = localStorage.getItem("userProfileEdit");
            if (userAccess || userProfileEdit) {
                props.dispatch(userDetail(userAccess));
                timerHandle = setTimeout(() => setState({ isLoading: false }), 1000);
            }
        }
    }, [props.userDetailEdit], [props.userDetail]);

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const userLocalStorage = JSON.parse(localStorage.getItem("userProfile"));

    return (
        <div>
            {
                props.isLogin ? (
                    <React.Fragment>
                        {state.isLoading ? (
                            <LoadingScreen />
                        ) : (
                                <Container>
                                    <div>
                                        {
                                            props.credentialsAdmin ? (
                                                <div className={classes.root}>
                                                    <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example" className={classes.tabs}>
                                                        <Tab label="Admin Profile" {...a11yProps(0)} />
                                                        <Tab label="My Cart" {...a11yProps(1)} />
                                                        <Tab label="Change Password" {...a11yProps(2)} />
                                                    </Tabs>
                                                    <TabPanel value={value} index={0}>
                                                        <UserProfile item={userLocalStorage} />
                                                    </TabPanel>
                                                    <TabPanel value={value} index={1}>
                                                        <UserCart item={userLocalStorage} />
                                                    </TabPanel>
                                                    <TabPanel value={value} index={2}>
                                                        <UserProfileChangePassword item={userLocalStorage} />
                                                    </TabPanel>
                                                </div>
                                            ) : (
                                                    <div className={classes.root}>
                                                        <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example" className={classes.tabs}>
                                                            <Tab label="My Profile" {...a11yProps(0)} />
                                                            <Tab label="My Cart" {...a11yProps(1)} />
                                                            <Tab label="Change Password" {...a11yProps(2)} />
                                                        </Tabs>
                                                        <TabPanel value={value} index={0}>
                                                            <UserProfile item={userLocalStorage} />
                                                        </TabPanel>
                                                        <TabPanel value={value} index={1}>
                                                            <UserCart item={userLocalStorage} />
                                                        </TabPanel>
                                                        <TabPanel value={value} index={2}>
                                                            <UserProfileChangePassword item={userLocalStorage} />
                                                        </TabPanel>
                                                    </div>
                                                )
                                        }
                                    </div>
                                </Container>
                            )
                        }
                        <Footer />
                    </React.Fragment>
                ) : (
                        < Redirect to="/" />
                    )
            }
        </div>
    )
}

const mapStateToProps = state => ({
    userDetailEdit: state.user.userDetailEdit,
    userUpdate: state.updatingUser,
    isLogin: state.user.isLogin,
    credentialsAdmin: state.admin.credentials,
    userDetail: state.user.userDetail,
})

export default connect(mapStateToProps)(UserScreen);