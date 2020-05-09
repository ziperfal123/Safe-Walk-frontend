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
import PatientDataSection from '../PatientDataSection'
import TestsSection from '../TestsSection'
import PlanForm from "components/Forms/PlanForm";

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
  } = props
  console.log('PatientPage')

  const [clickedTestId, setClickedTestId] = useState('')
  const [shouldOpenModal, setShouldOpenModal] = useState(false)
  const [didPostRequestSucceed, setDidPostRequestSucceed] = useState(false)


  useEffect(() => {
    getTestsById(patient.id)
    getRehabPlanById(patient.rehabPlanID)
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

  function handleFormSubmit(formData) {
    console.log('HANDLE SUBMIT')
  }

  function handleOnCancelModal() {
    setShouldOpenModal(false)
  }

  function handleEditPlan(toggleOverlay) {
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
                handleFormSubmit={(formData) => handleFormSubmit(formData)}
                handleOnCancel={handleOnCancelModal}
                visible={shouldOpenModal || didPostRequestSucceed}
                formTitle="Edit patient's plan"
                formDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim consequat."
                FormToRender={PlanForm}
                tabs={[]}   // ???? 
                // isLoading={loadingCreateVideo}
                // didPostRequestSucceed={didPostRequestSucceed}
                // setDidPostRequestSucceed={setDidPostRequestSucceed}
              />
              <PatientDataSection
                patient={patient}
                history={history}
                planById={planById}
                handleEditPlan={() => handleEditPlan(toggleOverlay)}
              />
              <hr />
              <TestsSection
                allTestsById={allTestsById}
                loadingAllTestsById={loadingAllTestsById}
                handleTestClick={handleTestClick}
              />
              <BackButton handleBackClick={handleBackClick} />
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
