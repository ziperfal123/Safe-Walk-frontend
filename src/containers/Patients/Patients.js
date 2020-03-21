import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import './patients.scss';
import pathsNames from 'router/pathNames';
import PatientsTable from './components/PatientsTable';
import PatientPage from './components/PatientPage';

const Patients = (props) => {
  console.log('Patients');
  console.log('props: ', props);
  const {
    history, getAllPatients, getTestsById, allPatients, loadingAllPatients
  } = props;

  const [selectedPatient, setSelectedPatient] = useState('');

  useEffect(() => {
    getAllPatients();
  }, []);

  function handleTableRowClick(patientObj) {
    setSelectedPatient(patientObj);
    history.push(`${pathsNames.patients}${patientObj.id}`);
  }

  return (
    <div className="switch-wrapper patients-page-container">
      <Switch>
        <Route
          path={pathsNames.patients}
          exact
          render={() => (
            <PatientsTable
              allPatients={allPatients}
              handleTableRowClick={handleTableRowClick}
              loadingAllPatients={loadingAllPatients}
            />
          )}
        />
        <Route
          path={`${pathsNames.patients}:${selectedPatient.id}`}
          render={() => (
            <PatientPage
              patient={selectedPatient}
              history={history}
            />
          )}
          getTestsById={getTestsById}
        />
      </Switch>
    </div>
  );
};

export default Patients;

Patients.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  getAllPatients: PropTypes.func.isRequired,
  getTestsById: PropTypes.func.isRequired,
  allPatients: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingAllPatients: PropTypes.bool.isRequired,
};
