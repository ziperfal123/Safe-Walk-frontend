import { connect } from 'react-redux'
import { getAllNotifications, pushNotificationFromSocketToNotificationPool } from 'redux/notifications/actionCreators'
import Header from './Header'

const mapStateToProps = (state) => ({
  userName: state.authReducer.userName,
  userImage: state.authReducer.userImage,
  notifications: state.notificationsReducer.notifications,
})
const mapDispatchToProps = { getAllNotifications, pushNotificationFromSocketToNotificationPool }

export default connect(mapStateToProps, mapDispatchToProps)(Header)
