import React from 'react'
import PropTypes from 'prop-types'

import './abnormalityChip.scss'

const AbnormalityChip = ({ results }) => {
  const colorClass = results.toLowerCase() === 'abnormality' ? 'red' : 'green'
  return <span className={`chip chip--${colorClass}`}>{results.toUpperCase()}</span>
}

export default AbnormalityChip

AbnormalityChip.propTypes = {
  results: PropTypes.string.isRequired,
}
