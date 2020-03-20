import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import columns from './tableColumns';

const PatientsTable = ({ allPatients, handleTableRowClick }) => {
  function handleRowClick(patientObj) {
    return {
      onClick: () => handleTableRowClick(patientObj),
    };
  }

  return (
    <div className="table-wrapper">
      <Table
        className="table"
        columns={columns}
        dataSource={allPatients}
        pagination={false}
        onRow={handleRowClick}
      />
    </div>
  );
};

export default PatientsTable;


PatientsTable.propTypes = {
  handleTableRowClick: PropTypes.func.isRequired,
  allPatients: PropTypes.arrayOf(PropTypes.object).isRequired,
};
