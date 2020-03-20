import { connect } from 'react-redux';
import { handleLoginFormSubmit } from 'redux/auth/actionsCreator';
import Login from './Login';


const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authReducer.isUserAuthenticated,
  loading: state.authReducer.loading,
});
const mapDispatchToProps = { handleLoginFormSubmit };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
