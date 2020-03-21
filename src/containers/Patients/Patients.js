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
    location,
    history,
    getAllPatients,
    getTestsById,
    allPatients,
    loadingAllPatients,
    loadingAllTestsById,
  } = props;

  const [selectedPatient, setSelectedPatient] = useState('');

  useEffect(() => {
    getAllPatients();
    if (selectedPatient === '' && location.pathname !== pathsNames.patients) history.push(pathsNames.patients);
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
        {selectedPatient && (
        <Route
          path={`${pathsNames.patients}:${selectedPatient.id}`}
          render={() => (
            <PatientPage
              patient={selectedPatient}
              history={history}
              loadingAllTestsById={loadingAllTestsById}
            />
          )}
          getTestsById={getTestsById}
        />
        ) }
      </Switch>
    </div>
  );
};

export default Patients;

Patients.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  getAllPatients: PropTypes.func.isRequired,
  getTestsById: PropTypes.func.isRequired,
  allPatients: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingAllPatients: PropTypes.bool.isRequired,
  loadingAllTestsById: PropTypes.bool.isRequired,
};
