import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import columns from './tableColumns';

const TestsTable = ({ allTests, allPatients }) => {
  console.log('TestsTable');
  console.log('allTests: ', allTests);
  console.log('allPatients: ', allPatients);

  function getNormalizedData() {
    const normalizedPatients = allTests.map((test) => {
      const patientId = test.patientID;
      const obj = {};
      allPatients.forEach((patient) => {
        if (patientId === patient.id) {
          obj.key = Math.random();
          obj.patientImage = patient.picture;
          obj.name = patient.name || 'name is not valid';
          obj.waitingStatus = patient.waitForPlan ? 'Yes' : 'No';
        }
      });
      return {
        ...obj,
        results: test.abnormality ? 'abnormality' : 'normal',
        testDate: test.date || 'date is not valid',
      };
    });

    return normalizedPatients;
  }

  return (
    <div className="table-wrapper">
      <Table
        className="table"
        columns={columns}
        dataSource={getNormalizedData()}
        pagination={false}
      />
    </div>
  );
};

export default TestsTable;

TestsTable.propTypes = {
  allTests: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  allPatients: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};
