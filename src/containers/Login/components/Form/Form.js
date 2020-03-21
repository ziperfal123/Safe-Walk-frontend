import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './form.scss';

const Form = ({ handleLoginFormSubmit }) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const firstInputRef = useRef();

  useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  function handleInputChange(event) {
    const { value } = event.target;
    const { name } = event.target;
    name === 'mail' ? setMail(value) : setPassword(value);
  }

  function handleLoginClick(e) {
    e.preventDefault();
    handleLoginFormSubmit();
  }

  return (
    <form className="form-container">
      {/* <i className="fas fa-user"></i> */}
      <input
        type="text"
        placeholder="user name"
        onChange={handleInputChange}
        name="mail"
        ref={firstInputRef}
      />
      <input
        type="password"
        placeholder="password"
        onChange={handleInputChange}
        name="password"
        autoComplete="off"
      />
      <button
        className="form-container__submit"
        onClick={handleLoginClick}
        type="button"
      >
        Login
      </button>

    </form>
  );
};

export default Form;

Form.propTypes = {
  handleLoginFormSubmit: PropTypes.func.isRequired,
};
