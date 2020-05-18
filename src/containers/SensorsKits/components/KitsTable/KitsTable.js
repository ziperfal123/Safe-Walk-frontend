import React from 'react'
import { Table } from 'antd'
import columns from './tableColumns'
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
