import React from 'react'
import PropTypes from 'prop-types'
import './addCard.scss'

const AddCard = ({ type, handleClick }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div className="add-card-container" onClick={handleClick}>
    <h2>{`Add a new ${type}`}</h2>
    <i className="fas fa-plus-circle fa-5x" />
  </div>
)

export default AddCard

AddCard.propTypes = ({
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
})
