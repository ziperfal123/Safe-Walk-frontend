import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import classNames from 'classnames'
import ErrorModal from 'components/ErrorModal'
import { cleanError } from 'redux/error/actionCreators'
import NotFound from 'containers/NotFound/NotFound'
import pathsNames from './router/pathNames'
import Header from './components/Header'
import SideBar from './components/SideBar'
import PatientTests from './containers/Tests'
import Patients from './containers/Patients'
import DefaultPlans from 'containers/DefaultPlans/'
import Videos from './containers/Videos'

export const OverlayContext = React.createContext(false)

// eslint-disable-next-line no-shadow
const App = ({ errorObj, cleanError, history }) => {

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
          <SideBar history={history} />
          <Switch>
            <Route exact path="/" component={Patients} />
            <Route path={pathsNames.patients} component={Patients} />
            <Route path={pathsNames.patientsTests} component={PatientTests} />
            <Route path={pathsNames.defaultPlans} component={DefaultPlans} />
            <Route exact path={pathsNames.videos} component={Videos} />
            <Route path="*" render={() => <NotFound isInApp />} />
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
