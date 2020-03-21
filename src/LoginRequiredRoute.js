import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import pathsNames from 'router/pathNames';

const LoginRequiredRoute = ({ location, component: Component, ...rest }) => {
  console.log('LoginRequiredRoute');
  return (
    <Route
      {...rest}
      render={(props) => (
        rest.isUserAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: pathsNames.login,
            state: { from: location },
          }}
          />
        )
      )}
    />
  );
};


const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authReducer.isUserAuthenticated,
  loading: state.authReducer.loading,
});
const mapDispatchToProps = { };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginRequiredRoute));


LoginRequiredRoute.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  component: PropTypes.objectOf(PropTypes.any).isRequired,
};
