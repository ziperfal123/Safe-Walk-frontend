import React from 'react'
import { Progress } from 'antd'
import PropTypes from 'prop-types'
import './patientDataSection.scss'

const PatientDataSection = ({ patient, planById }) => {
  function calculatePercentage() {
    if (planById && {}) { // TODO:: wtf?? fix..
      const totalVideos = planById.videos.length
      let totalDoneVideos = 0
      planById.videos.forEach((video) => {
        if (video.done) totalDoneVideos += 1
      })
      return Math.floor((totalDoneVideos / totalVideos) * 100)
    }
    return 0
  }

  function checkBarColor() {
    return calculatePercentage() < 50 ? 'red' : ''
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
            <button type="button">Edit Plan</button>
          </>
        ) : (
          <>
            <h3>No plan at the moment</h3>
            <button type="button">Create a plan</button>
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
