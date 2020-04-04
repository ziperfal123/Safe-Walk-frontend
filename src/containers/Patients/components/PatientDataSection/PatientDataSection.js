import React from 'react'
import PropTypes from 'prop-types'
import pathsNames from 'router/pathNames'
import './patientDataSection.scss'

const PatientDataSection = ({ patient, history }) => {
  function handleBackClick() {
    history.push(pathsNames.patients)
  }

  return (
    <div className="patient-data-section">
      <img src={patient.picture} alt="patient" />
      <h2>{patient.mail}</h2>
      <h2>{patient.name}</h2>
      <h2>{`${patient.age} Years old`}</h2>
      <button type="submit" onClick={handleBackClick}>temp Back</button>
    </div>
  )
}

export default PatientDataSection


PatientDataSection.propTypes = {
  patient: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
}
