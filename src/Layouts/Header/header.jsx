import React, { Component, useEffect } from "react";
// import classesStyle from './headerStyle.module.scss';
import { connect } from "react-redux";
import CourseService from "../../Services/courseService";
import CategoryItemHeader from "../../Components/CategoryItemHeader/categoryItemHeader";
import { NavLink } from 'react-router-dom';
import { FETCH_COURSES, LOGIN, ADD_CART_ITEM, CART_ITEM } from "../../Redux/Action/actionType";
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import classmodule from './headerStyle.module.scss';
import { Badge } from '@material-ui/core'
import { withStyles } from "@material-ui/styles";
import IconButton from '@material-ui/core/IconButton';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


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
    }, []);

    // useEffect(()=>{
    //     if(props.cartItem){
    //         props.dispatch(CART_ITEM, props.payload);
    //     }
    // });

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
                <NavLink style={{ color: '#0277bd', textDecoration: 'none' }} to="./login" onClick={() => { localStorage.clear(); props.dispatch(LOGIN, props.credentials) }}>
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/home"><i className="fa fa-magnet mr-2"></i>Udemy</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {
                    props.credentials ? (
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active dropdown">
                                <a className="nav-link" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-th mr-2"></i>Category
                            </a>
                                <div className="dropdown-menu">
                                    {props.categoryList.map((item, index) => (
                                        <div key={index}>
                                            <CategoryItemHeader item={item} />
                                        </div>
                                    ))}
                                </div>
                            </li>
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
                                        <a className="nav-link text-white" href="#"> udemy for Business</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className=" mr-3">
                                        <a className="nav-link text-white" href="#">Tech on Udemy</a>
                                    </div>
                                </li>
                            </ul>
                        )
                }
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    {
                        props.credentials ? (
                            <li className="nav-item dropdown">
                                <a className="nav-link active" href="#" onClick={toggleDrawer('right', true)}>Hi, {props.credentials.hoTen}</a>
                                <SwipeableDrawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)} onOpen={toggleDrawer('right', true)}> {sideList('right')} </SwipeableDrawer>
                            </li>
                        ) : (
                                <li className="nav-item active" >
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                            )
                    }{
                        props.credentials ? (
                            <li className="nav-item ">
                            </li>
                        ) : (
                                <li className="nav-item active" >
                                    <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                                </li>
                            )
                    }
                    <li className="nav-item ">
                        <NavLink to="/user/cartitem">
                            <IconButton arial-lable="cart">
                                {
                                    props.cartItem ? (
                                        <StyledBadge1 badgeContent={props.cartItem + "1"} color="secondary">
                                            <ShoppingCartIcon />
                                        </StyledBadge1>
                                    ) : (
                                            <StyledBadge1 badgeContent={0} color="secondary">
                                                <ShoppingCartIcon />
                                            </StyledBadge1>
                                        )
                                }
                                {/* <StyledBadge1 badgeContent={0} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge1> */}
                            </IconButton>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

const mapStateToProps = state => ({
    categoryList: state.categoryList,
    credentials: state.user.credentials,
    cartItem: state.cartItem,
});

export default connect(mapStateToProps)(Header);