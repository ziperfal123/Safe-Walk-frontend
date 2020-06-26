import React from 'react'
import { Avatar as AntdAvatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import './avatar.scss'
import AvatarImage from 'components/AvatarImage'

const Avatar = ({ userName, userImage }) => (

  <div className="avatar-container">
    <hr />
    <h4>{userName}</h4>
    <AvatarImage className="therapist" url={userImage} />
    {' '}
  </div>
)

export default Avatar


Avatar.propTypes = {
  userName: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
}
