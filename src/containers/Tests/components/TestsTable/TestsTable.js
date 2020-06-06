import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Input, Table } from 'antd'
import { cloneDeep } from 'lodash'
import columns from './tableColumns'

const TestsTable = (props) => {
  const {
    allTests,
    allPatients,
    loadingAllTests,
    handleTableRowClick,
  } = props

  const [normalizedTests, setNormalizedTests] = useState([])
  const [filteredTests, setFilteredTests] = useState([])

  useEffect(() => {
    const tests = getNormalizedData()
    setNormalizedTests(tests)
    setFilteredTests(tests)
  }, [allTests])

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

  function handleRowClick(testRow) {
    return {
      onClick: () => handleTableRowClick(testRow),
    }
  }

  function handleInputChange(e) {
    let tmpArr = cloneDeep(normalizedTests)
    tmpArr = tmpArr.filter((test) => {
      const lowerCaseName = test.name.toLowerCase()
      return lowerCaseName.includes(e.target.value)
    })
    setFilteredTests(tmpArr)
  }

  return (
    <>
      <div className="search-wrapper">
        <label>Filter:</label>
        <Input onChange={handleInputChange} />
      </div>
      <div className="table-wrapper">
        <Table
          className="table"
          columns={columns}
          dataSource={filteredTests}
          pagination={false}
          loading={loadingAllTests}
          onRow={handleRowClick}
        />
      </div>
    </>
  )
}

export default TestsTable

TestsTable.propTypes = {
  allTests: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  allPatients: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  loadingAllTests: PropTypes.bool.isRequired,
}
