import React from 'react';
import classes from './loadingScreenStyle.module.scss';

const LoadingScreen = props => {


    return (
        <div className={classes.item}>
             <img align="center" src='/img/Loading.svg' alt="Loading Logo" />
        </div>
    )
}

export default LoadingScreen;