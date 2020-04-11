import React from 'react'
import { Avatar as AntdAvatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import './avatar.scss'

const Avatar = ({ userName, userImage }) => {
  return (

    <div className="avatar-container">
      <hr />
      <h4>{userName}</h4>
      {userImage ? (
        <img src={userImage} alt="profile image" />
      ) : (
        <AntdAvatar className="antd-avatar" size={44} icon={<UserOutlined />} />
      )}
      {' '}
    </div>
  )
}

export default Avatar


Avatar.propTypes = {
  userName: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
}
