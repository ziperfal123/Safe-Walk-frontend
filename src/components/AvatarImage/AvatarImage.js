import React, { useState } from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './avatarImage.scss'

const AvatarImage = (props) => {
  const { url, className: propsClassName } = props

  const [isValidUrl, setIsValidUrl] = useState(true)
  return isValidUrl ? (
    <img
      className={propsClassName}
      src={`${url}`}
      alt="avatar picture"
      onError={() => {
        setIsValidUrl(false)
      }}
    />
  ) : (
    <Avatar className={`avatar-image ${propsClassName}`} size={42} icon={<UserOutlined />} />
  )
}

export default AvatarImage
