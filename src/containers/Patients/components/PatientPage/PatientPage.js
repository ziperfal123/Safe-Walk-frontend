import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import './patientPage.scss'
import pathsNames from 'router/pathNames'
import TestPage from 'containers/TestPage'
import PatientDataSection from '../PatientDataSection'
import TestsAndPlansSection from '../TestsAndPlansSection'

const PatientPage = (props) => {
  const {
    patient,
    getTestsById,
    history,
    allTestsById,
    cleanTestsById,
    loadingAllTestsById,
  } = props
  console.log('PatientPage')

  const [clickedTestId, setClickedTestId] = useState('')

  useEffect(() => {
    getTestsById(patient.id)
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

  function renderPageSections() {
    return (
      <>
        <PatientDataSection patient={patient} history={history} />
        <hr />
        <TestsAndPlansSection
          allTestsById={allTestsById}
          loadingAllTestsById={loadingAllTestsById}
          handleTestClick={handleTestClick}
        />
      </>
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
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  allTestsById: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  cleanTestsById: PropTypes.func.isRequired,
  loadingAllTestsById: PropTypes.bool.isRequired,
  patient: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ])).isRequired,
}
