import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import pathsNames from '../../router/pathNames'
import TestsTable from './components/TestsTable/TestsTable'
import './tests.scss'
import { Route, Switch } from 'react-router-dom'
import PatientsTable from 'containers/Patients/components/PatientsTable'
import PatientPage from 'containers/Patients/components/PatientPage'


const Tests = (props) => {
  const {
    location,
    history,
    getAllPatients,
    getAllTests,
    allPatients,
    allTests,
    loadingAllTests,
  } = props

  const [selectedTest, setSelectedTest] = useState('')

  useEffect(() => {
    if (location.pathname !== pathsNames.patientsTests) {
      history.push(pathsNames.patientsTests)
    }
    getAllPatients()
    getAllTests()
  }, [])

  function handleTableRowClick(testObj) {
    setSelectedTest(testObj)
    history.push(`${pathsNames.patientsTests}${testObj.testId}`)
  }

  function renderTestsTable() {
    return (
      <div className="patient-tests-container">
        <TestsTable
          allPatients={allPatients}
          allTests={allTests}
          loadingAllTests={loadingAllTests}
          handleTableRowClick={handleTableRowClick}
        />
      </div>
    )
  }

  function renderTestPage() {
    return (
        <h1>Hellosadjlkasdjlkasjdklajlksdjaskldjlksajdlksajdlksahfjkdhfjkhadldasjk World</h1>
    )
  }


  return (
    <>
      <Switch>
        <Route
          path={pathsNames.patientsTests}
          exact
          render={renderTestsTable}
        />
        { selectedTest && (
        <Route
          path={`${pathsNames.patientsTests}:${selectedTest.testId}`}
          render={renderTestPage}
        />
        ) }
      </Switch>
    </>
  )
}

export default Tests


Tests.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  getAllPatients: PropTypes.func.isRequired,
  getAllTests: PropTypes.func.isRequired,
  allPatients: PropTypes.arrayOf(PropTypes.any).isRequired,
  allTests: PropTypes.arrayOf(PropTypes.any).isRequired,
  loadingAllTests: PropTypes.bool.isRequired,
}
