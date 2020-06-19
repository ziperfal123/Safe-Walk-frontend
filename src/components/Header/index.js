import { connect } from 'react-redux'
import { getAllNotifications } from 'redux/notifications/actionCreators'
import Header from './Header'

const mapStateToProps = (state) => ({
  userName: state.authReducer.userName,
  userImage: state.authReducer.userImage,
  notifications: state.notificationsReducer.notifications,
})
const mapDispatchToProps = { getAllNotifications }

export default connect(mapStateToProps, mapDispatchToProps)(Header)
