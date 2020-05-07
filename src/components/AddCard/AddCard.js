import React from 'react'
import PropTypes from 'prop-types'
import PlusBtn from './files/plusBtn.svg'
import './addCard.scss'

const AddCard = ({ type, handleClick }) => {
  return (
    <div className="add-card-container" onClick={handleClick}>
      <h2>{`Add a new ${type}`}</h2>
      <img
        className="plus-btn"
        src={PlusBtn}
        alt="plus"
      />
    </div>
  )
}

export default AddCard

AddCard.propTypes = ({
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
})
