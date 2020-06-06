import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import columns from './tableColumns'

const TestsTable = (props) => {
  const {
    loadingAllTests,
    handleTableRowClick,
    allTests,
  } = props


  function handleRowClick(testRow) {
    return {
      onClick: () => handleTableRowClick(testRow),
    }
  }

  return (
    <>
      <div className="table-wrapper">
        <Table
          className="table"
          columns={columns}
          dataSource={allTests}
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
  loadingAllTests: PropTypes.bool.isRequired,
}
