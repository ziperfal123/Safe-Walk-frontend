import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import './patients.scss'
import pathsNames from 'router/pathNames'
import PatientsTable from './components/PatientsTable'
import PatientPage from './components/PatientPage'

const Patients = (props) => {
  console.log('Patients')
  const {
    location,
    history,
    getAllPatients,
    allPatients,
    loadingAllPatients,
    loadingAllTestsById,
    allTestsById,
  } = props

  const [selectedPatient, setSelectedPatient] = useState('')

  useEffect(() => {
    getAllPatients()
    if (selectedPatient === '' && location.pathname !== pathsNames.patients) history.push(pathsNames.patients)
  }, [])

  function handleTableRowClick(patientObj) {
    setSelectedPatient(patientObj)
    history.push(`${pathsNames.patients}${patientObj.id}`)
  }

  function renderPatientTable() {
    return (
      <PatientsTable
        allPatients={allPatients}
        handleTableRowClick={handleTableRowClick}
        loadingAllPatients={loadingAllPatients}
      />
    )
  }

  function renderPatientPage() {
    return (
      <PatientPage
        patient={selectedPatient}
        history={history}
        allTestsById={allTestsById}
        loadingAllTestsById={loadingAllTestsById}
      />
    )
  }

  return (
    <div className="patients-page">
      <Switch>
        <Route
          path={pathsNames.patients}
          exact
          render={renderPatientTable}
        />
        { selectedPatient && (
        <Route
          path={`${pathsNames.patients}:${selectedPatient.id}`}
          render={renderPatientPage}
        />
        ) }
      </Switch>
    </div>
  )
}

export default Patients


Patients.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  getAllPatients: PropTypes.func.isRequired,
  allPatients: PropTypes.arrayOf(PropTypes.object).isRequired,
  allTestsById: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingAllPatients: PropTypes.bool.isRequired,
  loadingAllTestsById: PropTypes.bool.isRequired,
}
