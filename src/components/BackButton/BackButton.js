import React from 'react'
import PropTypes from "prop-types";
import './backButton.scss'

const BackButton = ({ handleBackClick }) => (
  <button
    type="button"
    className="back-btn"
    onClick={handleBackClick}
  >
    Back
  </button>
)
export default BackButton

BackButton.propTypes = {
  handleBackClick: PropTypes.func.isRequired,
}
