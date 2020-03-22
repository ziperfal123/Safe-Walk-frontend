import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import pathsNames from 'router/pathNames';

const LeftSection = ({ patient, history }) => (
  <div className="left-section">
    <img src={patient.picture} alt="patient" />
    <h2>{patient.mail}</h2>
    <h2>{patient.name}</h2>
    <h2>
      {patient.age}
      {' '}
      Years old
    </h2>
    <button type="submit" onClick={() => { history.push(pathsNames.patients); }}>temp Back</button>
  </div>
);

export default LeftSection;

LeftSection.propTypes = {
  patient: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
