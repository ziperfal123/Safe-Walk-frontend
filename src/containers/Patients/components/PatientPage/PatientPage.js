import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import './patientPage.scss'
import pathsNames from 'router/pathNames'
import TestPage from 'containers/TestPage'
import PatientDataSection from '../PatientDataSection'
import TestsSection from '../TestsSection'

const PatientPage = (props) => {
  const {
    patient,
    planById,
    getTestsById,
    getRehabPlanById,
    history,
    allTestsById,
    cleanTestsById,
    loadingAllTestsById,
    loadingPlanById,
  } = props
  console.log('PatientPage')

  const [clickedTestId, setClickedTestId] = useState('')

  useEffect(() => {
    getTestsById(patient.id)
    getRehabPlanById(patient.rehabPlanID)
    return () => {
      cleanTestsById()
    }
  }, [])

  useEffect(() => {
    if (clickedTestId) history.push(`${history.location.pathname}/${clickedTestId}`)
  }, [clickedTestId])

  function handleTestClick(testId) {
    setClickedTestId(testId)
  }

  function handleBackClick() {
    history.push(pathsNames.patients)
  }

  function renderPageSections() {
    return (
      !allTestsById || loadingAllTestsById || loadingPlanById ? (
        <div className="loading-patient">
          <Spin />
        </div>
      ) : (
        <>
          <PatientDataSection
            patient={patient}
            history={history}
            planById={planById}
          />
          <hr />
          <TestsSection
            allTestsById={allTestsById}
            loadingAllTestsById={loadingAllTestsById}
            handleTestClick={handleTestClick}
          />
          <button
            type="button"
            className="back-btn"
            onClick={handleBackClick}
          >
            Back
          </button>
        </>
      )
    )
  }

  function renderTestPage() {
    return (
      <TestPage testId={clickedTestId} />
    )
  }

  return (
    <div className="patient-page">
      <Switch>
        <Route
          path={`${pathsNames.patients}:${patient.id}`}
          exact
          render={renderPageSections}
        />
        <Route
          path={`${pathsNames.patients}:${patient.id}/${clickedTestId}`}
          render={renderTestPage}
        />
      </Switch>
    </div>
  )
}

export default PatientPage


PatientPage.propTypes = {
  getTestsById: PropTypes.func.isRequired,
  getRehabPlanById: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  allTestsById: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  cleanTestsById: PropTypes.func.isRequired,
  loadingAllTestsById: PropTypes.bool.isRequired,
  loadingPlanById: PropTypes.bool.isRequired,
  planById: PropTypes.objectOf(PropTypes.any).isRequired,
  patient: PropTypes.objectOf(PropTypes.any).isRequired,
}
