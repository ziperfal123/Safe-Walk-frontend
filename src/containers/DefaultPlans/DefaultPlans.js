import React, { useEffect, useState } from 'react'
import { OverlayContext } from 'App'
import { Spin } from 'antd'
import AddCard from 'components/AddCard'
import Modal from 'components/Modal'
import DefaultPlansForm from 'components/Forms/DefaultPlanForm'
import DefaultPlanCard from 'components/DefaultPlanCard'
import {API} from 'utils/consts'
// import AddCard from "components/AddCard";
import 'containers/DefaultPlans/defaultPlans.scss'
import {deleteDefaultPlan} from "redux/defaultPlans/actionsCreator";

const DefaultPlans = (props) => {
  const {
    allDefaultPlans,
    loadingAllDefaultPlans,
    getAllDefaultPlans,
    allVideos,
    getAllVideos,
    createDefaultPlan,
    deleteDefaultPlan,
    loadingCreateDefaultPlan,
    activateErrorModal,
  } = props

  const [didPostRequestSucceed, setDidPostRequestSucceed] = useState(false)
  const [shouldOpenModal, setShouldOpenModal] = useState(false)

  useEffect(() => {
    getAllDefaultPlans()
    getAllVideos()
  }, [])

  function handleAddDefaultPlanClick(toggleOverlay) {
    toggleOverlay(true)
    setShouldOpenModal(true)
  }

  function handleRemoveDefaultPlan(planId) {
    deleteDefaultPlan(planId)
  }

  function handleOnCancelModal() {
    setShouldOpenModal(false)
  }

  async function handleFormSubmit(formData) {
    const creationResponse = await createDefaultPlan(formData)
    if (creationResponse === API.postRequestSuccess) {
      setDidPostRequestSucceed(true)
      setShouldOpenModal(false)
    } else {
      activateErrorModal(creationResponse && creationResponse.message)
    }
  }

  function renderDefaultPlan(plan) {
    return (
      <DefaultPlanCard
        key={plan.id}
        plan={plan}
        handleRemoveClick={handleRemoveDefaultPlan}
      />
    )
  }


  return (
    <OverlayContext.Consumer>
      {({ toggleOverlay }) => (
        <div className="default-plans-page">
          {loadingAllDefaultPlans || !allDefaultPlans ? (
            <div className="loading-default-plans">
              <Spin />
            </div>
          ) : (
            <>
              <Modal
                handleFormSubmit={(formData) => handleFormSubmit(formData)}
                handleOnCancel={handleOnCancelModal}
                visible={shouldOpenModal || didPostRequestSucceed}
                formTitle="Create a new Default Plan"
                formDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim consequat."
                type={'default plan'}
                FormToRender={DefaultPlansForm}
                allVideos={allVideos}
                isLoading={loadingCreateDefaultPlan}
                didPostRequestSucceed={didPostRequestSucceed}
                setDidPostRequestSucceed={setDidPostRequestSucceed}
              />
              <div className="default-plans-container">
                <AddCard type="default plan" handleClick={() => handleAddDefaultPlanClick(toggleOverlay)} />
                {allDefaultPlans.map(renderDefaultPlan)}
              </div>
            </>
          )}
        </div>
      )}
    </OverlayContext.Consumer>
  )
}
export default DefaultPlans