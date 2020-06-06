import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import './patients.scss'
import pathsNames from 'router/pathNames'
import Modal from 'components/Modal'
import { OverlayContext } from 'App'
import PatientForm from 'components/Forms/PatientForm'
import { API, PATIENT_FORM } from 'utils/consts'
import PatientPage from './components/PatientPage'
import PatientsTable from './components/PatientsTable'
import {cloneDeep} from "lodash";
import {Input} from "antd";

const Patients = (props) => {
  const {
    location,
    history,
    getAllPatients,
    allPatients,
    loadingAllPatients,
    loadingAllTestsById,
    allTestsById,
    activateErrorModal,
    createPatient,
    loadingCreatePatient,
    allDefaultPlans,
    getAllDefaultPlans,
  } = props

  const [selectedPatient, setSelectedPatient] = useState('')
  const [filteredPatients, setFilteredPatients] = useState([])
  const [shouldOpenModal, setShouldOpenModal] = useState(false)
  const [didPostRequestSucceed, setDidPostRequestSucceed] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    getAllPatients()
    if (selectedPatient === '' && location.pathname !== pathsNames.patients) history.push(pathsNames.patients)
  }, [])

  useEffect(() => {
    setFilteredPatients(allPatients)
    if (inputRef) inputRef.current.state.value = ''
  }, [allPatients])

  function handleTableRowClick(patientObj) {
    setSelectedPatient(patientObj)
    history.push(`${pathsNames.patients}${patientObj.id}`)
  }

  function handleAddPatientClick(toggleOverlay) {
    setShouldOpenModal(true)
    toggleOverlay(true)
  }

  async function handleFormSubmit(formData) {
    const createPatientResponse = await createPatient(formData)
    if (createPatientResponse === API.postRequestSuccess) {
      setDidPostRequestSucceed(true)
      setShouldOpenModal(false)
    } else {
      activateErrorModal(createPatientResponse && createPatientResponse.message)
    }
  }

  function handleOnCancelModal() {
    setShouldOpenModal(false)
  }

  function handleInputChange(e) {
    let tmpArr = cloneDeep(allPatients)
    tmpArr = tmpArr.filter((patient) => {
      const lowerCaseName = patient.name.toLowerCase()
      return lowerCaseName.includes(e.target.value)
    })
    setFilteredPatients(tmpArr)
  }


  function renderPatientTable() {
    let titleContent = ''
    if (filteredPatients.length === 1) {
      titleContent = 'Total of 1 patient:'
    } else if (filteredPatients.length === 0) {
      titleContent = 'No patients found'
    } else {
      titleContent = `Total of ${filteredPatients.length} patients:`
    }
    return (
      <OverlayContext.Consumer>
        {({ toggleOverlay }) => (
          <>
            <Modal
              modalWidth={650}
              handleFormSubmit={(formData) => handleFormSubmit(formData)}
              visible={shouldOpenModal || didPostRequestSucceed}
              type="patient"
              handleOnCancel={handleOnCancelModal}
              formTitle={PATIENT_FORM.formTitle}
              formDescription={PATIENT_FORM.formDescription}
              FormToRender={PatientForm}
              isLoading={loadingCreatePatient}
              didPostRequestSucceed={didPostRequestSucceed}
              setDidPostRequestSucceed={setDidPostRequestSucceed}
            />
            <button
              type="button"
              className="add-btn"
              onClick={() => handleAddPatientClick(toggleOverlay)}
            >
              Add
            </button>
            <div className="search-wrapper">
              <label>Filter:</label>
              <Input onChange={handleInputChange} ref={inputRef}/>
            </div>
            {!loadingAllPatients && allPatients.length > 0 && <h3 className="patients-title">{titleContent}</h3>}
            <PatientsTable
              allPatients={filteredPatients}
              handleTableRowClick={handleTableRowClick}
              loadingAllPatients={loadingAllPatients}
            />
          </>
        )}
      </OverlayContext.Consumer>
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
