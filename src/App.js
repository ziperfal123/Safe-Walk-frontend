import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import pathsNames from './router/pathNames'
import Header from './components/Header'
import SideBar from './components/SideBar'
import PatientTests from './containers/Tests'
import Patients from './containers/Patients'
import RehabPlans from './containers/RehabPlans/RehabPlans'
import Videos from './containers/Videos'

const App = () => {
  console.log('App')
  return (
    <div>
      <div className={'app-overlay modal-is-open'}></div>
      <>
      <Header />
      <SideBar />
        <Switch>
          <Route path={pathsNames.patientsTests} component={PatientTests} />
          <Route path={pathsNames.patients} component={Patients} />
          <Route path={pathsNames.defaultPlans} component={RehabPlans} />
          <Route path={pathsNames.videos} component={Videos} />
          {/* <Route path={'*'} component={PatientTests} /> */}
          // TODO:: should be changed to NotFound page, in the AppWrapper
          // (so the NotFound page will be rendered outside of the App)
        </Switch>
      </>
    </div>
  )
}


const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authReducer.isUserAuthenticated,
  loading: state.authReducer.loading,
})
const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(App)
