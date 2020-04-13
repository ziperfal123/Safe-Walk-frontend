import React from 'react'
import { Progress } from 'antd'
import PropTypes from 'prop-types'
import pathsNames from 'router/pathNames'
import './patientDataSection.scss'

const PatientDataSection = ({ patient, history, planById }) => {

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
            <Progress type="circle" percent={80} width={80} />
            <button>Edit Plan</button>
          </>
        ) : (
          <>
            <h3>No plan at the moment</h3>
            <button>Create a plan</button>
          </>
        )}
      </div>
    </div>
  )
}

export default PatientDataSection


PatientDataSection.propTypes = {
  patient: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  planById: PropTypes.objectOf(PropTypes.any).isRequired,
}
