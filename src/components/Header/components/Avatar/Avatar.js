import React from 'react'
import './avatar.scss'

const Avatar = ({ userName, userImage }) => {
  console.log('userName: ', userName)
  console.log('userImage: ', userImage)
  return (

    <div className={'avatar-container'}>
      <hr />
      <h4>{userName}</h4>
      <img src={userImage}/>
    </div>
  )
}

export default Avatar
