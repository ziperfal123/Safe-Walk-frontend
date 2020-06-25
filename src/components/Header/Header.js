import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { notification } from 'antd'
import socketIOClient from 'socket.io-client'
import pathsNames from 'router/pathNames'
import HeaderDropdown from 'components/Header/components/HeaderDropdown'
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

  const [numOfPushedNotifications, setNumOfPushedNotifications] = useState(0)
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false)

  useEffect(() => {
    getAllNotifications()
  }, [])

  useEffect(() => {
    const socket = socketIOClient(SERVER_SOCKET_URL)
    socket.on('NEW_THERAPIST_NOTIFICATION', (data) => {
      setNumOfPushedNotifications((prevState) => prevState + 1)
      pushNotificationFromSocketToNotificationPool(data)
      openNotificationWithIcon(data.description)
    })
  }, [])

  useEffect(() => {
    const pushedNotifications = parseInt(localStorage.getItem('numOfPushedNotifications'))
    setNumOfPushedNotifications(pushedNotifications)
  }, [])

  useEffect(() => {
    localStorage.setItem('numOfPushedNotifications', numOfPushedNotifications)
  }, [numOfPushedNotifications])


  useEffect(() => {
    isNotificationsMenuOpen && setNumOfPushedNotifications(0)
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

  const openNotificationWithIcon = (notificationDescription) => {
    notification.info({
      message: 'Patient\'s plan notification',
      description: notificationDescription || 'patient has updated plan process',
      placement: 'bottomRight',
    })
  }

  const handleDropdownVisibleChange = (toggleFlag) => {
    setIsNotificationsMenuOpen(toggleFlag)
  }

  return (
    <div className="header-container">
      <h1 className="route-title">{displayRouteName()}</h1>
      <div className="avatar-container">
        <HeaderDropdown
          notifications={notifications}
          numOfPushedNotifications={numOfPushedNotifications}
          isNotificationsMenuOpen={isNotificationsMenuOpen}
          handleDropdownVisibleChangeCB={handleDropdownVisibleChange}
        />
        <Avatar userName={userName} userImage={userImage} />
      </div>
    </div>
  )
}

export default withRouter(Header)

Header.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
}
