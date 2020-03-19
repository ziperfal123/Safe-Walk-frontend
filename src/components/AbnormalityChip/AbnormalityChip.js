import React from 'react'
import './abnormalityChip.scss'

const AbnormalityChip = ({ results }) => {
    console.log('AbnormalityChip')
    const colorClass = results.toLowerCase() === 'abnormality' ? 'red' : 'green'
    return <span className={`chip ${colorClass}`}>{results.toUpperCase()}</span>
}

export default AbnormalityChip