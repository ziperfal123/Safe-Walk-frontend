import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import './patientPage.scss'
import pathsNames from 'router/pathNames'
import BackButton from 'components/BackButton'
import TestPage from 'containers/TestPage'
import Modal from 'components/Modal'
import { OverlayContext } from 'App'
import PlanForm from 'components/Forms/PlanForm'
import { API } from 'utils/consts'
import PatientDataSection from '../PatientDataSection'
import TestsSection from '../TestsSection'


const PatientPage = (props) => {
  const {
    patient,
    planById,
    getTestsById,
    getRehabPlanById,
    history,
    allTestsById,
    cleanTestsById,
    loadingAllTestsById,
    loadingPlanById,
    allDefaultPlans,
    getAllDefaultPlans,
    allVideos,
    getAllVideos,
    editPlan,
    createPlan,
    activateErrorModal,
    loadingEditPlan,
    therapistId,
  } = props

  const [clickedTestId, setClickedTestId] = useState('')
  const [shouldOpenModal, setShouldOpenModal] = useState(false)
  const [didPostRequestSucceed, setDidPostRequestSucceed] = useState(false)
  const [modalMode, setModalMode] = useState('')


  useEffect(() => {
    getTestsById(patient.id)
    getRehabPlanById(patient.rehabPlanID)
    getAllDefaultPlans()
    getAllVideos()
    return cleanTestsById
  }, [])

  useEffect(() => {
    if (clickedTestId) history.push(`${history.location.pathname}/${clickedTestId}`)
  }, [clickedTestId])

  function handleTestClick(testId) {
    setClickedTestId(testId)
  }

  function handleBackClick() {
    history.goBack()
    setClickedTestId('')
  }

  async function handleFormSubmit(formData) {
    if (modalMode === 'edit') {
      const editPlanResponse = await editPlan(formData, planById.id)
      if (editPlanResponse === API.postRequestSuccess) {
        setDidPostRequestSucceed(true)
        setShouldOpenModal(false)
      } else {
        activateErrorModal(editPlanResponse && editPlanResponse.message)
      }
    } else if (modalMode === 'new') {
      const createPlanResponse = await createPlan(formData)
      if (createPlanResponse === API.postRequestSuccess) {
        setDidPostRequestSucceed(true)
        setShouldOpenModal(false)
      } else {
        activateErrorModal(createPlanResponse && createPlanResponse.message)
      }
    }
  }

  function handleOnCancelModal() {
    setShouldOpenModal(false)
  }

  function handleOpenModal(mode, toggleOverlay) {
    setModalMode(mode)
    setShouldOpenModal(true)
    toggleOverlay(true)
  }

  function renderPageSections() {
    return (
      <OverlayContext.Consumer>
        {({ toggleOverlay }) => (
          loadingAllTestsById || !allTestsById || loadingPlanById ? (
            <div className="loading-patient">
              <Spin />
            </div>
          ) : (
            <>
              <Modal
                modalWidth={700}
                handleFormSubmit={(formData) => handleFormSubmit(formData)}
                handleOnCancel={handleOnCancelModal}
                visible={shouldOpenModal || didPostRequestSucceed}
                type="plan"
                formTitle={modalMode === 'edit' ? "Edit patient's plan" : "Create patient's plan"}
                formDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim consequat."
                FormToRender={PlanForm}
                patientId={patient.id}
                therapistId={therapistId}
                dataToEdit={modalMode === 'edit' && planById}
                allDefaultPlans={allDefaultPlans}
                allVideos={allVideos}
                isLoading={loadingEditPlan}
                didPostRequestSucceed={didPostRequestSucceed}
                setDidPostRequestSucceed={setDidPostRequestSucceed}
              />
              <PatientDataSection
                patient={patient}
                history={history}
                planById={planById}
                handleOpenModal={(mode) => handleOpenModal(mode, toggleOverlay)}
              />
              <hr />
              <TestsSection
                allTestsById={allTestsById}
                loadingAllTestsById={loadingAllTestsById}
                handleTestClick={handleTestClick}
                patientName={patient.name}
              />
            </>
          )
        )}
      </OverlayContext.Consumer>

    )
  }

  function renderTestPage() {
    return (
      <TestPage history={history} testId={clickedTestId} handleBackClick={handleBackClick} />
    )
  }

  return (
    <div className="patient-page">
      <Switch>
        <Route
          path={`${pathsNames.patients}:${patient.id}`}
          exact
          render={renderPageSections}
        />
        <Route
          path={`${pathsNames.patients}:${patient.id}/${clickedTestId}`}
          render={renderTestPage}
        />
      </Switch>
    </div>
  )
}

export default PatientPage


PatientPage.propTypes = {
  getTestsById: PropTypes.func.isRequired,
  getRehabPlanById: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  allTestsById: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  cleanTestsById: PropTypes.func.isRequired,
  loadingAllTestsById: PropTypes.bool.isRequired,
  loadingPlanById: PropTypes.bool.isRequired,
  planById: PropTypes.objectOf(PropTypes.any).isRequired,
  patient: PropTypes.objectOf(PropTypes.any).isRequired,
}
