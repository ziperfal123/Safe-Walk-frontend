import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import pathsNames from '../../router/pathNames'
import TestsTable from './components/TestsTable/TestsTable'
import './tests.scss'
import { Route, Switch } from 'react-router-dom'
import TestPage from 'containers/TestPage'

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

  const [selectedTestId, setSelectedTestId] = useState('')

  useEffect(() => {
    if (location.pathname !== pathsNames.patientsTests) {
      history.push(pathsNames.patientsTests)
    }
    getAllPatients()
    getAllTests()
  }, [])

  function handleTableRowClick(testObj) {
    setSelectedTestId(testObj.testId)
    history.push(`${pathsNames.patientsTests}${testObj.testId}`)
  }

  function handleBackClick() {
    history.goBack()
    setSelectedTestId('')
  }


  function renderTestsTable() {
    let titleContent = ''
    if (allTests.length === 1) {
      titleContent = 'Total of 1 test:'
    } else if (allTests.length > 1) {
      titleContent = `Total of ${allTests.length} tests:`
    }
    return (
      <div className="patient-tests-container">
        {!loadingAllTests && allTests.length > 0 && <h3 className="tests-title">{titleContent}</h3>}
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
      <div className="patients-page">
        <div className="patient-page">
          <TestPage history={history} testId={selectedTestId} handleBackClick={handleBackClick} />
        </div>
      </div>
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
        { selectedTestId && (
        <Route
          path={`${pathsNames.patientsTests}:${selectedTestId}`}
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
