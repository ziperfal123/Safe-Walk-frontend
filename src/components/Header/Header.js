import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Button, Dropdown, Menu } from 'antd'
import { NotificationOutlined } from '@ant-design/icons'
import socketIOClient from 'socket.io-client'
import pathsNames from 'router/pathNames'
import Avatar from './components/Avatar'
import './header.scss'
import { SERVER_SOCKET_URL } from '../../config'

const Header = (props) => {
  const {
    location, userName, userImage, getAllNotifications, notifications,
  } = props

  useEffect(() => {
    getAllNotifications()
  }, [])

  useEffect(() => {
    const socket = socketIOClient(SERVER_SOCKET_URL)
    socket.on('NEW_THERAPIST_NOTIFICATION', (data) => {
      console.log('data: ', data)
    })
  }, [])
  const displayRouteName = () => {
    let normalizedTitle
    switch (location.pathname) {
      case pathsNames.patientsTests:
        normalizedTitle = 'Patient\'s Tests'
        break
      case pathsNames.patients:
        normalizedTitle = 'All Patients'
        break
      case pathsNames.defaultPlans:
        normalizedTitle = 'Default Plans'
        break
      case pathsNames.videos:
        normalizedTitle = 'Exercise Videos'
        break
      default:
        normalizedTitle = 'Safe Walk'
    }
    return normalizedTitle
  }

  let generateMenu;
  generateMenu = () => {
    console.log('notifications: ', notifications)
    return (
        <Menu className="dropdown-menu notification-menu" onClick={() => {
        }}>
          <h5>Notifications</h5>
          <hr/>
          {notifications.map((notification) => (
              <Menu.Item key={notification.timeStamp}>
                <img
                    className="patient-image"
                    src={notification.patientPicture}
                    alt="patient"
                />
                <span className="description">{notification.description}</span>
              </Menu.Item>
          ))}
        </Menu>
    )
  };

  return (
    <div className="header-container">
      <h1 className="route-title">{displayRouteName()}</h1>
      <div className="avatar-container">
        <Dropdown overlay={generateMenu()} trigger={['click']} placement="bottomLeft">
          <Button className="dropdown-btn flash">
            <NotificationOutlined />
            <div className="num-of-notifications">2</div>
          </Button>
        </Dropdown>
        <Avatar userName={userName} userImage={userImage} />
      </div>
    </div>
  )
}

export default withRouter(Header)

Header.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
}
