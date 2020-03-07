import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


const LoginRequiredRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        console.log('rest: ', rest)
        return (
        rest.loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/login/',
                state: { from: props.location }
            }} />
        )
    )}} />
)

export default connect(
    state => ({
        loggedIn: state.loggedIn,
    })
)(LoginRequiredRoute);
