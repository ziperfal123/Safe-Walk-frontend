import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import './patientPage.scss'
import pathsNames from 'router/pathNames'
import BackButton from 'components/BackButton'
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
    history.goBack()
    setClickedTestId('')
  }

  function renderPageSections() {
    return (
      loadingAllTestsById || !allTestsById || loadingPlanById ? (
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
          <BackButton handleBackClick={handleBackClick} />
        </>
      )
    )
  }

  function renderTestPage() {
    return (
      <TestPage history={history} testId={clickedTestId} handleBackClick={handleBackClick} />
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
