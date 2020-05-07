import React from 'react'
import { Result } from 'antd'
import classNames from 'classnames'
import './notFound.scss'

export default function NotFound({ isInApp }) {
  const notFoundClasses = classNames({
    'not-found-page': true,
    'in-app': isInApp,
    'outside-app': !isInApp,
  })
  return (
    <div className={notFoundClasses}>
      <div className="not-found-message">
        <Result
          status="404"
          subTitle="This link is broken.. Please try again"
        />
      </div>
    </div>
  )
}
