import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'
import pathsNames from 'router/pathNames'
import { AUTH } from 'utils/consts'

const LoginRequiredRoute = ({ location, component: Component, ...rest }) => {
  function renderRedirect() {
    if (rest.isUserAuthenticated === AUTH.isNotAuthenticated) {
      return location.pathname === pathsNames.login ? (
        <Redirect to={{
          pathname: pathsNames.login,
          state: { from: location },
        }}
        />
      ) : (
        <Redirect to={{
          pathname: pathsNames.notFound,
          state: { from: location },
        }}
        />
      )
    }
    return <div />
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        rest.isUserAuthenticated === AUTH.isAuthenticated ? (
          <Component {...props} />
        ) : (
          renderRedirect()
        )
      )}
    />
  )
}


const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authReducer.isUserAuthenticated,
  loading: state.authReducer.loading,
})
const mapDispatchToProps = { }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginRequiredRoute))


LoginRequiredRoute.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  component: PropTypes.objectOf(PropTypes.any).isRequired,
}
