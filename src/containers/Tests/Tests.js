import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './tests.scss';
import pathsNames from '../../router/pathNames';
import TestsTable from './components/TestsTable/TestsTable';


const Tests = (props) => {
  const {
    location,
    history,
    getAllPatients,
    getAllTests,
    allPatients,
    allTests,
    loadingAllTests,
  } = props;


  useEffect(() => {
    if (location.pathname !== pathsNames.patientsTests) {
      history.push(pathsNames.patientsTests);
    }
    getAllPatients();
    getAllTests();
  }, []);

  return (
    <div className="switch-wrapper patient-tests-container">
      <TestsTable
        allPatients={allPatients}
        allTests={allTests}
        loadingAllTests={loadingAllTests}
      />
    </div>
  );
};

export default Tests;


Tests.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  getAllPatients: PropTypes.func.isRequired,
  getAllTests: PropTypes.func.isRequired,
  allPatients: PropTypes.arrayOf(PropTypes.any).isRequired,
  allTests: PropTypes.arrayOf(PropTypes.any).isRequired,
  loadingAllTests: PropTypes.bool.isRequired,
};
