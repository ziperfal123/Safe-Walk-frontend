import React from 'react';
import { connect } from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {changeUserAuthStatus} from "./redux/actions/actionsCreator";


const LoginRequiredRoute = ({ component: Component, ...rest }) => {
    console.log('LoginRequiredRoute')
    console.log('Component: ', Component)
    return (
        <Route {...rest} render={props => {
            console.log('rest: ', rest)
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