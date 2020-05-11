import React, { useEffect } from 'react'
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


  useEffect(() => {
    if (location.pathname !== pathsNames.patientsTests) {
      history.push(pathsNames.patientsTests)
    }
    getAllPatients()
    getAllTests()
  }, [])

  function renderTestsTable() {
    return (
        <div className="patient-tests-container">
          <TestsTable
              allPatients={allPatients}
              allTests={allTests}
              loadingAllTests={loadingAllTests}
          />
        </div>
    )
  }

  function renderTestPage() {
    return ( <div />
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
        { false && (
        <Route
          // path={`${pathsNames.patients}:${selectedPatient.id}`}
          render={renderTestPage}
        />
        ) }
      </Switch>
    </>
  )

  // return (
  //   <div className="patient-tests-container">
  //     <TestsTable
  //       allPatients={allPatients}
  //       allTests={allTests}
  //       loadingAllTests={loadingAllTests}
  //     />
  //   </div>
  // )
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
