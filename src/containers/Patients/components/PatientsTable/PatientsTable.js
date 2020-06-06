import React, { useEffect, useState } from 'react'
import { Input, Table } from 'antd'
import PropTypes from 'prop-types'
import { cloneDeep } from 'lodash'
import './patientsTable.scss'
import columns from './tableColumns'

const PatientsTable = (props) => {
  const { allPatients, handleTableRowClick, loadingAllPatients } = props
  const [filteredPatients, setFilteredPatients] = useState([])

  useEffect(() => {
    setFilteredPatients(allPatients)
  }, [allPatients])

  function handleRowClick(patientObj) {
    return {
      onClick: () => handleTableRowClick(patientObj),
    }
  }

  function handleInputChange(e) {
    let tmpArr = cloneDeep(allPatients)
    tmpArr = tmpArr.filter((patient) => {
      const lowerCaseName = patient.name.toLowerCase()
      return lowerCaseName.includes(e.target.value)
    })
    setFilteredPatients(tmpArr)
  }

  return (
    <>
      <div className="search-wrapper">
        <label>Filter:</label>
        <Input onChange={handleInputChange} />
      </div>
      <div className="patients-table-wrapper">
        <Table
          className="table"
          columns={columns}
          dataSource={filteredPatients}
          pagination={false}
          onRow={handleRowClick}
          loading={loadingAllPatients}
        />
      </div>
    </>
  )
}

export default PatientsTable


PatientsTable.propTypes = {
  handleTableRowClick: PropTypes.func.isRequired,
  allPatients: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingAllPatients: PropTypes.bool.isRequired,
}
