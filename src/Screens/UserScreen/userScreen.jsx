import React, { useEffect } from "react";
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import UserProfile from "../../Components/UserProfileScreen/UserProfile/userProfile";
import { Button, Link } from "@material-ui/core";
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
        marginTop:50
        
    },
}));
const UserScreen = props => {

    useEffect(() => {
        //Lấy dữ liệu userDetail từ api
        const userLoginStr = localStorage.getItem('userLogin');
        const userAccessToken = localStorage.getItem('accessToken');
        const userRightStr = localStorage.getItem('userRight');
        if (userLoginStr && userAccessToken && userRightStr === "HV") {
            let userAccess = localStorage.getItem(settings.taiKhoan);
            let userProfile = localStorage.getItem("userProfile");
            // let userProfileEdit = localStorage.getItem(settings.userProfileEdit);
            if (userAccess && !userProfile) {
                props.dispatch(userDetail(userAccess));
            }
        }
    }, []);

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const userLocalStorage = JSON.parse(localStorage.getItem(settings.userProfile));

    return (
        <React.Fragment>
            <Container>
            <div className={classes.root}>
                <Tabs orientation="vertical" variant="scrollable"value={value} onChange={handleChange} aria-label="Vertical tabs example" className={classes.tabs}>
                    
                    <Tab label="Profile" {...a11yProps(0)} />
                    <Tab label="My Cart" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <UserProfile />
                    
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <UserCart item={userLocalStorage} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                    </TabPanel>
            </div>
            </Container>
        </React.Fragment>
    )
}

// const mapStateToProps = state => ({
//     credentialsAdmin: state.admin.credentials,
// })

export default connect()(UserScreen);