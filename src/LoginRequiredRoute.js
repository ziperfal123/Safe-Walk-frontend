import React from 'react';
import { connect } from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {changeUserAuthStatus} from "./redux/auth/actionsCreator";


const LoginRequiredRoute = ({ component: Component, ...rest }) => {
    console.log('LoginRequiredRoute')
    return (
        <Route {...rest} render={props => {
            return (
            rest.isUserAuthenticated ? (
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
        isUserAuthenticated: state.authReducer.isUserAuthenticated,
        loading: state.authReducer.loading
    }
}
const mapDispatchToProps = { }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginRequiredRoute))