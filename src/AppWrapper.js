import React, {Component, useEffect} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import App from './App';
import Loading from './components/Loading/Loading';
import Login from './containers/Login/Login';
import LoginRequiredRoute from './LoginRequiredRoute';

import { changeLoggedIn } from './redux/actionsCreator';


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


export default withRouter(connect(
    state => ({
        loggedIn: state.loggedIn,
    }), {
        changeLoggedIn,
    }
)(AppWrapper))
