import { connect } from 'react-redux'
import SideBar from './SideBar'
import { handleLogout } from '../../redux/auth/actionsCreator'

const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authReducer.isUserAuthenticated,
  loading: state.authReducer.loading,
})
const mapDispatchToProps = { handleLogout }

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
