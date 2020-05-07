import React from 'react'
import './notFound.scss'
import {Result} from "antd";

export default function NotFound(props) {
  return (
    <div className="not-found-page">
      <div className={'not-found-message'}>
        <Result
            status="404"
            subTitle="This link is broken.. Please try again"
        />
      </div>
    </div>
  )
}
