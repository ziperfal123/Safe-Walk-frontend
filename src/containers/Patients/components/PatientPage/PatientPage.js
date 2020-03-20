import React, { useEffect } from 'react';
import PropTypes, { objectOf } from 'prop-types';
import './patientPage.scss';
import pathsNames from 'router/pathNames';
import RightSection from '../RightSection';

const PatientPage = (props) => {
  const {
    patient, getTestsById, history, allTestsById, cleanTestsById,
  } = props;
  console.log('PatientPage');

  useEffect(() => {
    getTestsById(patient.id);
    return cleanTestsById;
  }, []);

  return (
    <div className="patient-page-container">
      <div className="left-section">
        <img src={patient.picture} alt="patient" />
        <h2>{patient.mail}</h2>
        <h2>{patient.name}</h2>
        <h2>
          {patient.age}
          {' '}
          Years old
        </h2>
        <button type="submit" onClick={() => { history.push(pathsNames.patients); }}>Back</button>
      </div>
      <hr />
      <RightSection allTestsById={allTestsById} />
    </div>
  );
};

export default PatientPage;


PatientPage.propTypes = {
  getTestsById: PropTypes.func.isRequired,
  history: PropTypes.objectOf().isRequired,
  allTestsById: PropTypes.arrayOf(objectOf()).isRequired,
  cleanTestsById: PropTypes.func.isRequired,
  patient: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ])).isRequired,
};
