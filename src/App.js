import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import classNames from 'classnames'
import ErrorModal from 'components/ErrorModal'
import { cleanError } from 'redux/error/actionCreators'
import pathsNames from './router/pathNames'
import Header from './components/Header'
import SideBar from './components/SideBar'
import PatientTests from './containers/Tests'
import Patients from './containers/Patients'
import RehabPlans from './containers/RehabPlans/RehabPlans'
import Videos from './containers/Videos'
import NotFound from "containers/NotFound/NotFound";

export const OverlayContext = React.createContext(false)

// eslint-disable-next-line no-shadow
const App = ({ errorObj, cleanError, history }) => {
  console.log('App')

  const [isOverlayActive, toggleOverlay] = useState(false)

  const overlayClasses = classNames({
    'app-overlay': true,
    'modal-is-open': isOverlayActive,
  })

  return (
    <OverlayContext.Provider
      value={{ toggleOverlay }}
    >
      <>
        <div className={overlayClasses} />
        <>
          <Header />
          <SideBar history={history}/>
          <Switch >
            <Route exact path="/" component={PatientTests} />
            <Route path={pathsNames.patientsTests} component={PatientTests} />
            <Route path={pathsNames.patients} component={Patients} />
            <Route path={pathsNames.defaultPlans} component={RehabPlans} />
            <Route exact path={pathsNames.videos} component={Videos} />
            <Route path='*' render={() => <NotFound isInApp/>} />
            {/*// TODO:: should be changed to NotFound page, in the AppWrapper*/}
            {/*// (so the NotFound page will be rendered outside of the App)*/}
          </Switch>
          {errorObj.errorOccurred
              && (
              <ErrorModal
                visible={errorObj.errorOccurred}
                errorMessage={errorObj.errorMessage}
                cleanError={cleanError}
                destroyOnClose
              />
              )}
        </>
      </>
    </OverlayContext.Provider>
  )
}


const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authReducer.isUserAuthenticated,
  loading: state.authReducer.loading,
  errorObj: state.errorReducer.errorObj,
})
const mapDispatchToProps = { cleanError }

export default connect(mapStateToProps, mapDispatchToProps)(App)
