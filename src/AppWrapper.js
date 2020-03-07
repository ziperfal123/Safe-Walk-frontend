import React, {useEffect} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import App from './App';
import Loading from './components/Loading/Loading';
import Login from './containers/Login';
import LoginRequiredRoute from './LoginRequiredRoute';
import { checkUserAuthStatusOnAppLoad } from './redux/actions/actionsCreator';


function AppWrapper(props) {
    console.log('AppWrapper')
    useEffect(() => {
        props.checkUserAuthStatusOnAppLoad()
    }, [])

    if (props.isUserAuthenticated === null || props.loading) {
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
    return {
        isUserAuthenticated: state.authReducer.isUserAuthenticated,
        loading: state.authReducer.loading
    }
}
const mapDispatchToProps = { checkUserAuthStatusOnAppLoad }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppWrapper))