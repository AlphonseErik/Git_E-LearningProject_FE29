import { Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import Header from '../Layouts/Header';

const HomeLayout = (props) => {
    return (
        <Fragment> {/* Giống thẻ div nhưng không render trên giao diện */}
            <Header />
            {props.children}
        </Fragment>
    )
}


export const HomeTemplate = ({ Component, ...propsRoute }) => {

    return <Route {...propsRoute} render={({ ...propsComponent }) => {
        return <HomeLayout>
            <Component {...propsComponent} />
        </HomeLayout>
    }} />
}

