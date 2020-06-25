import React from 'react'
import { NotificationOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu } from 'antd'
import { cloneDeep } from 'lodash'
import classNames from 'classnames'

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
    handleDropdownVisibleChangeCB(!isNotificationsMenuOpen)
  }

  const menuButtonClassNames = classNames('dropdown-btn', {
    flash: numOfPushedNotifications > 0,
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
        {numOfPushedNotifications > 0 && !isNotificationsMenuOpen
          && <span className="num-of-notifications">{numOfPushedNotifications}</span>}
      </Button>
    </Dropdown>

  )
}

export default HeaderDropdown
