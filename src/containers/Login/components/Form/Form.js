import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import './form.scss'

const Form = ({ handleLoginFormSubmit }) => {
  const [loginMail, setMail] = useState('')
  const [loginPassword, setPassword] = useState('')
  const firstInputRef = useRef()

  useEffect(() => {
    firstInputRef.current.focus()
  }, [])

  function handleInputChange(event) {
    const { value } = event.target
    const { name } = event.target
    name === 'loginMail' ? setMail(value) : setPassword(value)
  }

  function handleLoginClick(e) {
    e.preventDefault()
    handleLoginFormSubmit(loginMail, loginPassword)
  }

  return (
    <form className="login-form">
      <input
        type="text"
        placeholder="user name"
        onChange={handleInputChange}
        name="loginMail"
        ref={firstInputRef}
      />
      <input
        type="password"
        placeholder="password"
        onChange={handleInputChange}
        name="loginPassword"
        autoComplete="off"
      />
      <button
        onClick={handleLoginClick}
        type="button"
      >
        Login
      </button>
    </form>
  )
}

export default Form

Form.propTypes = {
  handleLoginFormSubmit: PropTypes.func.isRequired,
}
