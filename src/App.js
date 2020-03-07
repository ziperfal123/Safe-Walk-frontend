import React from 'react';
import { connect } from 'react-redux';
import {Link, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import { changeUserAuthStatus } from './redux/actions/actionsCreator';
import pathsNames from './router/pathNames'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import PatientTests from "./containers/PatientTests/PatientTests";
import Patients from "./containers/Patients/Patients";
import RehabPlans from "./containers/RehabPlans/RehabPlans";
import Videos from "./containers/Videos/Videos";
import NotFound from './containers/NotFound/NotFound.js'


const App = (props) =>  {
    console.log('App')
    return (
        <div>
            <Header />
            <SideBar />
            <Switch>
                <Route path={pathsNames.patientsTests} component={PatientTests} />
                <Route path={pathsNames.patients} component={Patients} />
                <Route path={pathsNames.rehabPlans} component={RehabPlans} />
                <Route path={pathsNames.videos} component={Videos} />
                <Route path={'*'} component={PatientTests} />
            </Switch>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        isUserAuthenticated: state.authReducer.isUserAuthenticated,
        loading: state.authReducer.loading
    }
}
const mapDispatchToProps = { changeUserAuthStatus }

export default connect(mapStateToProps, mapDispatchToProps)(App)