import React from 'react'
import { NotificationOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu } from 'antd'
import { cloneDeep } from 'lodash'
import classNames from 'classnames'
import AvatarImage from 'components/AvatarImage'

const HeaderDropdown = (props) => {
  const {
    notifications,
    numOfPushedNotifications,
    isNotificationsMenuOpen,
    handleDropdownVisibleChangeCB,
  } = props

  const generateMenu = () => {
    let portionArr = cloneDeep(notifications)
    if (portionArr.length > 5) {
      portionArr = portionArr.splice(0, 5)
    }

    const menuClassName = classNames({
      'dropdown-menu': portionArr.length > 0,
      'notification-menu': portionArr.length > 0,
    })
    return (
      <Menu
        className={menuClassName}
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

        {portionArr.map((notification, index) => index < 5 && (
          <Menu.Item key={notification.timeStamp} className="menu-item">
            <AvatarImage className="patient-image" url={notification.patientPicture} />
            <div className="text-wrapper">
              <span className="description">{notification.description}</span>
              <span className="time">{notification.localTime}</span>
            </div>
          </Menu.Item>
        ))}
        <Menu.Divider />
      </Menu>
    )
  }

  const handleDropdownVisibleChange = () => {
    handleDropdownVisibleChangeCB(!isNotificationsMenuOpen)
  }

  const menuButtonClassNames = classNames('dropdown-btn', {
    flash: notifications.length > 0 && numOfPushedNotifications > 0 && !isNotificationsMenuOpen,
  })

  return (
    <Dropdown
      disabled={notifications.length === 0}
      overlay={generateMenu()}
      trigger={['click']}
      placement="bottomLeft"
      onVisibleChange={handleDropdownVisibleChange}
      getPopupContainer={(elem) => elem.parentNode}
    >
      <Button className={menuButtonClassNames}>
        <NotificationOutlined />
        {notifications.length > 0 && numOfPushedNotifications > 0 && !isNotificationsMenuOpen
          && <span className="num-of-notifications">{numOfPushedNotifications}</span>}
      </Button>
    </Dropdown>

  )
}

export default HeaderDropdown
