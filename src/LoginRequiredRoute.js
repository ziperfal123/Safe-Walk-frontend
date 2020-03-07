import React from 'react';
import { connect } from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {changeLoggedIn} from "./redux/actions/actionsCreator";


const LoginRequiredRoute = ({ component: Component, ...rest }) => {
    console.log('LoginRequiredRoute')
    console.log('Component: ', Component)
    return (
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
}




const mapStateToProps = state => {
    return {
        loggedIn: state.authReducer.loggedIn,
        loading: state.authReducer.loading
    }
}
const mapDispatchToProps = { }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginRequiredRoute))