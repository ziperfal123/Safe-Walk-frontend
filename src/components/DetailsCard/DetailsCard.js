import React from 'react'
import PropTypes from 'prop-types'
import './detailsCard.scss'

const DetailsCard = ({ children, handleCardClick, id }) => {
  console.log('DetailsCard')

  function handleClick() {
    handleCardClick(id)
  }

  return (
    <div className="card-container" onClick={handleClick}>
      { children }
    </div>
  )
}

export default DetailsCard

DetailsCard.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
  handleCardClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}
