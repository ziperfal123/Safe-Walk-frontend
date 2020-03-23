import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import './patientPage.scss';
import pathsNames from 'router/pathNames';
import RightSection from '../RightSection';
import Left from '../LeftSection';

const PatientPage = (props) => {
  const {
    patient,
    getTestsById,
    history,
    allTestsById,
    cleanTestsById,
    loadingAllTestsById,
  } = props;
  console.log('PatientPage');

  useEffect(() => {
    getTestsById(patient.id);
    return () => {
      cleanTestsById();
    };
  }, []);

  function handleTestClick(testId) {
    console.log('id: ', testId);
    history.push(`${history.location.pathname}/${testId}`);
  }

  console.log('patient.id: ', patient.id);
  return (
    <div className="patient-page-container">
      <Route
        path={`${pathsNames.patients}:${patient.id}`}
        exact
        render={() => (
          <>
            <Left patient={patient} history={history} />
            <hr />
            <RightSection
              allTestsById={allTestsById}
              loadingAllTestsById={loadingAllTestsById}
              handleTestClick={handleTestClick}
            />
          </>
        )}
      />
      {/* <Route */}
      {/*    path={`${pathsNames.patients}:${patient.id}:${test.id}`} */}
      {/*    exact */}
      {/*    render={() => ( */}
      {/*        <> */}
      {/*          <h1>HELLO WORLD</h1> */}
      {/*        </> */}
      {/*    )} */}
      {/* /> */}
    </div>
  );
};

export default PatientPage;


PatientPage.propTypes = {
  getTestsById: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  allTestsById: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  cleanTestsById: PropTypes.func.isRequired,
  loadingAllTestsById: PropTypes.bool.isRequired,
  patient: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ])).isRequired,
};
