import React from 'react'
import { Table } from 'antd'
import PropTypes from 'prop-types'
import './patientsTable.scss'
import columns from './tableColumns'

const PatientsTable = (props) => {
  const { allPatients, handleTableRowClick, loadingAllPatients } = props

  function handleRowClick(patientObj) {
    return {
      onClick: () => handleTableRowClick(patientObj),
    }
  }

  return (
    <div className="patients-table-wrapper">
      <Table
        className="table"
        columns={columns}
        dataSource={allPatients}
        pagination={false}
        onRow={handleRowClick}
        loading={loadingAllPatients}
      />
    </div>
  )
}

export default PatientsTable


PatientsTable.propTypes = {
  handleTableRowClick: PropTypes.func.isRequired,
  allPatients: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingAllPatients: PropTypes.bool.isRequired,
}
