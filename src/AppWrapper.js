import React, { useEffect } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import App from './App'
import Loading from './components/Loading'
import Login from './containers/Login'
import LoginRequiredRoute from './LoginRequiredRoute'
import { checkUserAuthStatusOnAppLoad } from './redux/auth/actionsCreator'


// eslint-disable-next-line no-shadow,react/prop-types
function AppWrapper({ loading, checkUserAuthStatusOnAppLoad }) {
  console.log('AppWrapper')
  useEffect(() => {
    checkUserAuthStatusOnAppLoad()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <Switch>
      <Route path="/login/" component={Login} />
      <LoginRequiredRoute component={App} />
    </Switch>
  )
}


const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authReducer.isUserAuthenticated,
  loading: state.authReducer.loading,
})
const mapDispatchToProps = { checkUserAuthStatusOnAppLoad }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppWrapper))


AppWrapper.propTypes = {
  loading: PropTypes.bool.isRequired,
}
