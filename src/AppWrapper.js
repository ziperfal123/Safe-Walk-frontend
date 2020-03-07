import React, {Component, useEffect} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import App from './App';
import Loading from './components/Loading/Loading';
import Login from './containers/Login/Login';
import LoginRequiredRoute from './LoginRequiredRoute';

import { changeUserAuthStatus } from './redux/actions/actionsCreator';


function AppWrapper(props) {
    console.log('AppWrapper')
    console.log('AppWrapper--> props: ', props)
    useEffect(() => {
        setTimeout(() => { props.changeUserAuthStatus(false) }, 1300);
    }, [])

    if (props.isUserAuthenticated === null) {
        return <Loading />
    }

    return (
        <Switch>
            <Route path="/login/" component={Login} />
            <LoginRequiredRoute component={App} />
        </Switch>
    )
}


const mapStateToProps = state => {
    console.log('state: ', state)
    return {
        isUserAuthenticated: state.authReducer.isUserAuthenticated,
        loading: state.authReducer.loading
    }
}
const mapDispatchToProps = { changeUserAuthStatus }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppWrapper))