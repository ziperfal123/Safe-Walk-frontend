import React from 'react'
import { Progress } from 'antd'
import PropTypes from 'prop-types'
import './patientDataSection.scss'

const PatientDataSection = ({ patient, planById, handleOpenModal }) => {
  function calculatePercentage() {
    if (planById) {
      let totalTimes = 0
      let totalTimesLeft = 0

      planById.videos.forEach((video) => {
        totalTimes += video.times
        totalTimesLeft += video.timesLeft
      })

      if (totalTimes === totalTimesLeft) return 0
      return Math.floor(Math.floor((totalTimesLeft / totalTimes) * 100))
    }
    return 0
  }

  function checkBarColor() {
    return calculatePercentage() <= 50 ? 'red' : ''
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
            <Progress strokeColor={checkBarColor()} className="progress-bar" type="circle" percent={calculatePercentage()} width={80} />
            <button type="button" onClick={() => handleOpenModal('edit')}>Edit Plan</button>
          </>
        ) : (
          <>
            <h3>No plan at the moment</h3>
            <button type="button" onClick={() => handleOpenModal('new')}>Create a plan</button>
          </>
        )}
      </div>
    </div>
  )
}

export default PatientDataSection


PatientDataSection.propTypes = {
  patient: PropTypes.objectOf(PropTypes.any).isRequired,
  planById: PropTypes.objectOf(PropTypes.any).isRequired,
}
