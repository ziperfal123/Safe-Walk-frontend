import React from 'react'

const Report = (props) => {
  const { formTitle, formDescription } = props
  console.log('Report')
  return (
      <div className={'form'}>
        <h1>{formTitle}</h1>
        <p>{formDescription}</p>
      </div>
  )
}

export default Report
