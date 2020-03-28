import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import './patientPage.scss'
import pathsNames from 'router/pathNames'
import RightSection from '../RightSection'
import Left from '../LeftSection'
import TestPage from '../../../TestPage'

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
    // history.push(`${history.location.pathname}${testId}`)
  }

  return (
    <div className="patient-page-container">
      <Switch>
        <Route
          path={`${pathsNames.patients}:${patient.id}`}
          exact
          render={() => (
            <>
              <Left patient={patient} history={history} />
              <hr />
              <RightSection
                allTestsById={allTestsById}
                loadingAllTestsById={loadingAllTestsById}
                handleTestClick={handleTestClick}
              />
            </>
          )}
        />
        <Route
          path={`${pathsNames.patients}:${patient.id}/${clickedTestId}`}
          render={() => (
            <TestPage testId={clickedTestId} />
          )}
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
