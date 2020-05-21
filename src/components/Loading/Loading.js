import React from 'react'
import { Spin } from 'antd'
import './loading.scss'

const Loading = () => {
  return (
    <div className="loading-page">
      <Spin size="large" />
    </div>
  )
}


export default Loading
