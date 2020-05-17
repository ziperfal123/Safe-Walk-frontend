import React from 'react'
import { Table } from 'antd'
import PropTypes from 'prop-types'
import './kitsTable.scss'

const KitsTable = (props) => {
  console.log('KitsTable')
  return (
      <div className="patients-table-wrapper">
          <Table
            className="table"
            // columns={columns}
            // dataSource={allPatients}
            pagination={false}
            // onRow={handleRowClick}
            // loading={loadingAllPatients}
          />
      </div>
  )
}

export default KitsTable
