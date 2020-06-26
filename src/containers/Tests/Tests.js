import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import pathsNames from '../../router/pathNames'
import TestsTable from './components/TestsTable/TestsTable'
import './tests.scss'
import { Route, Switch } from 'react-router-dom'
import TestPage from 'containers/TestPage'
import { Input } from 'antd'
import { cloneDeep } from 'lodash'
import { TABLE_PAGES } from 'utils/consts'

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
  const [normalizedTests, setNormalizedTests] = useState([])
  const [filteredTests, setFilteredTests] = useState([])
  const inputRef = useRef(null)

  useEffect(() => {
    if (location.pathname !== pathsNames.patientsTests) {
      history.push(pathsNames.patientsTests)
    }
    getAllPatients()
    getAllTests()
  }, [])

  useEffect(() => {
    if (allTests && allPatients) {
      const tests = getNormalizedData()
      setNormalizedTests(tests)
      setFilteredTests(tests)
      if (inputRef && inputRef.current && inputRef.current.state) {
        inputRef.current.state.value = ''
      }
    }
  }, [allTests, allPatients])

  function getNormalizedData() {
    const normalizedPatients = allTests.map((test) => {
      const patientId = test.patientID
      const obj = {}
      allPatients.forEach((patient) => {
        if (patientId === patient.id) {
          obj.key = Math.random()
          obj.patientImage = patient.picture
          obj.name = patient.name || 'name is not valid'
          obj.waitingStatus = patient.waitForPlan ? 'Yes' : 'No'
          obj.testId = test.id
        }
      })
      return {
        ...obj,
        results: test.abnormality ? 'abnormality' : 'normal',
        testDate: test.date || 'date is not valid',
      }
    })

    return normalizedPatients
  }

  function handleTableRowClick(testObj) {
    setSelectedTestId(testObj.testId)
    history.push(`${pathsNames.patientsTests}${testObj.testId}`)
  }

  function handleBackClick() {
    history.goBack()
    setSelectedTestId('')
  }

  function handleInputChange(e) {
    let tmpArr = cloneDeep(normalizedTests)
    tmpArr = tmpArr.filter((test) => {
      const lowerCaseName = test.name.toLowerCase()
      return lowerCaseName.includes(e.target.value)
    })
    setFilteredTests(tmpArr)
  }

  function renderTestsTable() {
    let titleContent = ''
    if (filteredTests.length === 1) {
      titleContent = 'Total of 1 test:'
    } else if (filteredTests.length === 0) {
      titleContent = 'No tests found'
    } else {
      titleContent = `Total of ${filteredTests.length} tests:`
    }

    return (
      <div className="patient-tests-container">
        <div className="search-wrapper">
          <label>{TABLE_PAGES.filterTitle}</label>
          <Input onChange={handleInputChange} ref={inputRef} />
        </div>
        {!loadingAllTests && <h3 className="tests-title">{titleContent}</h3>}
        <TestsTable
          allTests={filteredTests}
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
