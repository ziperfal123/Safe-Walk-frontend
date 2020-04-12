import { connect } from 'react-redux'
import Header from './Header'

import { handleLoginFormSubmit } from 'redux/auth/actionsCreator'
import authReducer from "redux/auth/authReducer";
const mapStateToProps = (state) => ({
  userName: state.authReducer.userName,
  userImage: state.authReducer.userImage,
})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Header)