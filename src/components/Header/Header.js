import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Button, Dropdown, Menu } from 'antd'
import { NotificationOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import socketIOClient from 'socket.io-client'
import pathsNames from 'router/pathNames'
import Avatar from './components/Avatar'
import './header.scss'
import { SERVER_SOCKET_URL } from '../../config'

const Header = (props) => {
  const {
    location, userName, userImage, getAllNotifications, notifications,
  } = props

  const [numOfPushedNotifications, setNumOfPushedNotificaitons] = useState(1)
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false)
  const [notificationsWasOpened, setNotificationsWasOpened] = useState(false)

  useEffect(() => {
    getAllNotifications()
  }, [])

  useEffect(() => {
    const socket = socketIOClient(SERVER_SOCKET_URL)
    socket.on('NEW_THERAPIST_NOTIFICATION', (data) => {
      console.log('data: ', data)
      setNumOfPushedNotificaitons((prevNum) => prevNum++)
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

  const generateMenu = () => (
    <Menu
      className="dropdown-menu notification-menu"
      onClick={() => {
      }}
    >
      <h5>Notifications</h5>
      <hr />
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

  const handleMenuButtonClick = () => {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen)
    if (!notificationsWasOpened) {
      setNotificationsWasOpened(true)
    }
  }

  const menuButtonClassNames = classNames('dropdown-btn', {
    flash: numOfPushedNotifications > 0 && !notificationsWasOpened,
  })
  return (
    <div className="header-container">
      <h1 className="route-title">{displayRouteName()}</h1>
      <div className="avatar-container">
        <Dropdown overlay={generateMenu()} trigger={['click']} placement="bottomLeft">
          <Button className={menuButtonClassNames} onClick={handleMenuButtonClick}>
            <NotificationOutlined />
            {numOfPushedNotifications > 0 && !isNotificationsMenuOpen && !notificationsWasOpened
            && <span className="num-of-notifications">{numOfPushedNotifications}</span>}
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
