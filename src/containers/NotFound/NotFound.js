import React from 'react'
import { Result } from 'antd'
import classNames from 'classnames'
import { NOT_FOUND } from "utils/consts";
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
        />
        <div className={'text-section'}>
          <p>{NOT_FOUND.firstLine}</p>
          <p>{NOT_FOUND.secondLine}</p>
          <h2>SafeWalk Team.</h2>
          <hr />
        </div>
      </div>
    </div>
  )
}
