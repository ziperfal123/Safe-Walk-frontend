import React, {Component, useEffect} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import App from './App';
import Loading from './components/Loading/Loading';
import Login from './containers/Login/Login';
import LoginRequiredRoute from './LoginRequiredRoute';

import { changeLoggedIn } from './redux/actions/actionsCreator';


function AppWrapper(props) {
    useEffect(() => {
        setTimeout(() => { props.changeLoggedIn(false) }, 1300);
    }, [])


    console.log('AppWrapper Render')
    if (props.loggedIn === null) {
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
        loggedIn: state.authReducer.loggedIn,
        loading: state.authReducer.loading
    }
}
const mapDispatchToProps = { changeLoggedIn }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppWrapper))