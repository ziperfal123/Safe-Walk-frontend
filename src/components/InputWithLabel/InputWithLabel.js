import React from 'react'
import { Input as AntInput } from 'antd'
import './inputWithLabel.scss'

const InputWithLabel = (props) => {
  const { label } = props
  console.log('InputWithLabel')

  return (
    <div className="input-with-label">
      <label>{label}:</label>
      <AntInput
        className="input"
        {...props}
      />
    </div>
  )
}

export default InputWithLabel
