import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';

/*export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Outlet />
            : <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)*/

export const PrivateRoute = () => {
    let auth = null; // determine if authorized, from context or however you're doing it
    auth = localStorage.getItem('user');

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/login" />;
}