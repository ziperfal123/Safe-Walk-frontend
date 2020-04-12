import React from 'react'
import PropTypes from 'prop-types'
import pathsNames from 'router/pathNames'
import './patientDataSection.scss'

const PatientDataSection = ({ patient, history, planById }) => {
  function handleBackClick() {
    history.push(pathsNames.patients)
  }

  return (
    <div className="patient-data-section">
      <img src={patient.picture} alt="patient" />
      <div className="personal-details">
        <h2>Personal Details:</h2>
        <h3>{patient.mail}</h3>
        <h3>{patient.name}</h3>
        <h3>{`${patient.age} Years old`}</h3>
      </div>
      <div className="plan-details">
        <h2>Rehabilitation details:</h2>
        {planById ? (
            <>
              <h3>Starting date: 10-03-19</h3>
              <h3>{patient.name}</h3>
              <h3>{`${patient.age} Years old`}</h3>
            </>
        ) : (
            <>
              <h3>No plan at the moment</h3>
              <button>Create a plan</button>
            </>
        )}
      </div>
      <button type="submit" onClick={handleBackClick}>temp Back</button>
    </div>
  )
}

export default PatientDataSection


PatientDataSection.propTypes = {
  patient: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  planById: PropTypes.objectOf(PropTypes.any).isRequired,
}
