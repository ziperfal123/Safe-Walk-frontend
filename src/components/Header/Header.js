import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  Button, Dropdown, Menu, notification,
} from 'antd'
import { NotificationOutlined } from '@ant-design/icons'
import { cloneDeep } from 'lodash'
import classNames from 'classnames'
import socketIOClient from 'socket.io-client'
import pathsNames from 'router/pathNames'
import Avatar from './components/Avatar'
import { SERVER_SOCKET_URL } from '../../config'
import './header.scss'

const Header = (props) => {
  const {
    location,
    userName,
    userImage,
    getAllNotifications,
    notifications,
    pushNotificationFromSocketToNotificationPool,
  } = props

  const [numOfPushedNotifications, setNumOfPushedNotificaitons] = useState(0)
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false)

  useEffect(() => {
    getAllNotifications()
  }, [])

  useEffect(() => {
    const socket = socketIOClient(SERVER_SOCKET_URL)
    socket.on('NEW_THERAPIST_NOTIFICATION', (data) => {
      setNumOfPushedNotificaitons((prevState) => prevState + 1)
      pushNotificationFromSocketToNotificationPool(data)
      openNotificationWithIcon(data.description)
    })
  }, [])

  useEffect(() => {
    isNotificationsMenuOpen && setNumOfPushedNotificaitons(0)
  }, [isNotificationsMenuOpen])

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

  const generateMenu = () => {
    let portionArr = cloneDeep(notifications)
    portionArr = portionArr.splice(notifications.length - 5)

    const menuClassNames = classNames({
      'dropdown-menu': portionArr.length > 0,
      'notification-menu': portionArr.length > 0,
    })
    return (
      <Menu
        className={menuClassNames}
        onClick={() => {
        }}
      >
        {portionArr.length > 0
            && (
            <>
              <h5>Notifications</h5>
              <hr />
            </>
            )}

        {portionArr.map((notif) => (
          <Menu.Item key={notif.timeStamp} className="menu-item">
            <span className="image-wrapper">
              <img
                className="patient-image"
                src={notif.patientPicture}
                alt="patient"
              />
            </span>
            <div className="text-wrapper">
              <span className="description">{notif.description}</span>
              <span className="time">{notif.localTime}</span>
            </div>
          </Menu.Item>
        ))}
        <Menu.Divider />
      </Menu>
    )
  }

  const handleDropdownVisibleChange = () => {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen)
  }

  const openNotificationWithIcon = (notificationDescription) => {
    notification.info({
      message: 'Patient\'s plan notification',
      description: notificationDescription || 'patient has updated plan process',
      placement: 'bottomRight',
    })
  }


  const menuButtonClassNames = classNames('dropdown-btn', {
    flash: numOfPushedNotifications > 0,
  })
  return (
    <div className="header-container">
      <h1 className="route-title">{displayRouteName()}</h1>
      <div className="avatar-container">
        <Dropdown
          disabled={notifications.length === 0}
          overlay={generateMenu()}
          trigger={['click']}
          placement="bottomLeft"
          onVisibleChange={handleDropdownVisibleChange}
        >
          <Button className={menuButtonClassNames}>
            <NotificationOutlined />
            {numOfPushedNotifications > 0 && !isNotificationsMenuOpen
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
