import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import App from './App';
import Loading from './components/Loading/Loading';
import Login from './containers/Login/Login';
import LoginRequiredRoute from './LoginRequiredRoute';

import { changeLoggedIn } from './redux/actionsCreator';


class ActuallyMainApp extends Component {
    componentDidMount() {
        setTimeout(() => { this.props.changeLoggedIn(false) }, 300);
    }

    render() {
        if (this.props.loggedIn === null) {
            return <Loading />
        }

        return (
            <Switch>
                <Route path="/login/" component={Login} />
                <LoginRequiredRoute component={App} />
            </Switch>
        )
    }
}


export default withRouter(connect(
    state => ({
        loggedIn: state.loggedIn,
    }), {
        changeLoggedIn,
    }
)(ActuallyMainApp))
