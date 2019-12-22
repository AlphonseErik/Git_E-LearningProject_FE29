import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import CourseService from "../../Services/courseService";
import CategoryItemHeader from "../../Components/CategoryItemHeader/categoryItemHeader";
import { NavLink } from 'react-router-dom';
import { FETCH_COURSES, LOGIN, FETCH_CATEGORY } from "../../Redux/Action/actionType";
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Badge } from '@material-ui/core'
import { withStyles } from "@material-ui/styles";
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import sass from './headerStyle.module.scss';
import ForumIcon from '@material-ui/icons/Forum';
import { userSignoutAction } from "../../Redux/Action/userAction";

const courseService = new CourseService();

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const StyledBadge1 = withStyles(theme => ({
    badge: {
        right: -3,
        padding: '0 4px'
    },
}))(Badge)

const Header = props => {

    useEffect(() => {
        if (localStorage.getItem("userRight") === "HV") {
            courseService.fetchCategory()
                .then(res => {
                    props.dispatch({
                        type: FETCH_CATEGORY,
                        payload: res.data,
                    }, console.log(res.data));
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            courseService.fetchCourse()
                .then(res => {
                    props.dispatch({
                        type: FETCH_COURSES,
                        payload: res.data,
                    }, console.log(res.data));
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [props.credentials], [props.userDetail]);

    const logoutHandleButton = e => {
        setTimeout(() => {
            props.dispatch(userSignoutAction(props.history));
        }, 200);
    }

    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div className={classes.list} role="presentation" onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)}>
            {/* {['Profile', 'Logout'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <PersonIcon/> : <ExitToAppIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))} */}
            <List>
                <NavLink style={{ color: '#0277bd', textDecoration: 'none' }} to="/user/profile">
                    <ListItem button key="Profile">
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                </NavLink>
            </List>
            <List>
                <NavLink style={{ color: '#0277bd', textDecoration: 'none' }} to="./">
                    <ListItem button key="Course">
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Course" />
                    </ListItem>
                </NavLink>
            </List>
            <List>
                <NavLink style={{ color: '#0277bd', textDecoration: 'none' }} to="./login" onClick={logoutHandleButton}>
                    <ListItem button key="Logout">
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </NavLink>
            </List>
            <Divider />
        </div>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                {
                    props.credentialsAdmin ? (
                        <NavLink className="navbar-brand" to="/admin"><i className="fa fa-magnet mr-2"></i>H & T Management</NavLink>
                    ) : (
                            <NavLink className="navbar-brand" to="/home"><i className="fa fa-angellist mr-2" style={{ fontSize: 30 }}></i>H & T</NavLink>
                        )
                }
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        props.credentials ?
                            (
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    {
                                        props.credentialsAdmin ? (
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/admin">
                                                    <SupervisorAccountIcon />
                                                </NavLink>
                                            </li>
                                        ) : (
                                                <li className="nav-item active dropdown">
                                                    <NavLink className="nav-link" data-toggle="dropdown" to="#" aria-haspopup="true" aria-expanded="false">
                                                        <i className="fa fa-th mr-2"></i>Category
                                                    </NavLink>
                                                    <div className="dropdown-menu">
                                                        <div>
                                                            <CategoryItemHeader />
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                    }


                                    <li className="nav-item">
                                        <div className="input-group ml-5">
                                            <input type="text" className="form-control" placeholder="Search for anything" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <span className="input-group-text" id="basic-addon2"><i className="fa fa-search"></i></span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ) : (
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item">
                                        <div className=" mr-4">
                                            <a className="nav-link" href="#"> H&T for Business</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className=" mr-3">
                                            <a className="nav-link" href="#">Tech on H&T</a>
                                        </div>
                                    </li>
                                </ul>
                            )
                    }
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

                        <li className="nav-item active mr-2">
                            {props.credentialsAdmin ? (
                                <NavLink className="nav-link" to="#">
                                    <ForumIcon />
                                </NavLink>
                            ) : (
                                    <NavLink to="/cart">
                                        <IconButton arial-lable="cart" className="mr-3" >
                                            {
                                                props.cartItem ? (
                                                    <StyledBadge1 badgeContent={props.cartItem.length} color="secondary">
                                                        <ShoppingCartIcon />
                                                    </StyledBadge1>
                                                ) : (
                                                        <StyledBadge1 badgeContent={0}>
                                                            <ShoppingCartIcon />
                                                        </StyledBadge1>
                                                    )
                                            }
                                        </IconButton>
                                    </NavLink>
                                )
                            }
                        </li>

                        {
                            props.credentials ? (
                                <li className="nav-item dropdown">
                                    {
                                        props.credentialsAdmin ? (
                                            <a className="nav-link active" href="#" onClick={toggleDrawer('right', true)}>Welcome, {props.credentialsAdmin.hoTen}</a>
                                        ) : (
                                                <div className={sass.colo}>
                                                    <a className="nav-link  active" href="#" onClick={toggleDrawer('right', true)}>{props.credentials.hoTen}</a>
                                                </div>
                                            )
                                    }
                                    <SwipeableDrawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)} onOpen={toggleDrawer('right', true)}> {sideList('right')} </SwipeableDrawer>
                                </li>
                            ) : (

                                    <li className="nav-item active" >
                                        <div className={sass.dangnhap}>
                                            <button className="btn">
                                                <NavLink className="nav-link py-1" to="/login">Login</NavLink>
                                            </button>
                                        </div>
                                    </li>

                                )
                        }
                        {
                            props.credentials ? (
                                <li className="nav-item ">
                                </li>
                            ) : (

                                    <li className="nav-item active ml-2 mr-3" >
                                        <div className={sass.dangky}>
                                            <button className="btn">
                                                <NavLink className="nav-link py-1" to="/signup">Sign Up</NavLink>
                                            </button>
                                        </div>
                                    </li>

                                )
                        }
                        {/* <li className="nav-item active">
                            {props.credentialsAdmin ? (
                                <NavLink className="nav-link" to="#">
                                    <ForumIcon />
                                </NavLink>
                            ) : (
                                    <NavLink to="/cart">
                                        <IconButton arial-lable="cart">
                                            {
                                                props.cartItem ? (
                                                    <StyledBadge1 badgeContent={props.cartItem.length} color="secondary">
                                                        <ShoppingCartIcon />
                                                    </StyledBadge1>
                                                ) : (
                                                        <StyledBadge1 badgeContent={0}>
                                                            <ShoppingCartIcon />
                                                        </StyledBadge1>
                                                    )
                                            }
                                        </IconButton>
                                    </NavLink>
                                )
                            }
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav >
    )
}

const mapStateToProps = state => ({
    categoryList: state.categoryList,
    credentials: state.user.credentials,
    courseList: state.courseList,
    cartItem: state.cartItem,
    categoryChoosenList: state.categoryChoosenList,
    credentialsAdmin: state.admin.credentials,
    userDetail: state.user.userDetail,
});

export default connect(mapStateToProps)(Header);