import React, { useEffect } from 'react'
import { OverlayContext } from 'App'
import { Spin } from 'antd'
import Modal from 'components/Modal'
import DefaultPlansForm from 'components/Forms/DefaultPlanForm'
// import AddCard from "components/AddCard";
import 'containers/DefaultPlans/defaultPlans.scss'

const DefaultPlans = (props) => {
  const {
    allDefaultPlans,
    loadingAllDefaultPlans,
    getAllDefaultPlans,
  } = props
  console.log('default plans')

  useEffect(() => {
    getAllDefaultPlans()
  }, [])

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
                handleFormSubmit={(formData) => console.log(formData)}
                handleOnCancel={console.log('cancel')}
                // visible={shouldOpenModal || didPostRequestSucceed}
                formTitle="Create a new Default Plan"
                formDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim consequat."
                FormToRender={DefaultPlansForm}
                // isLoading={loadingCreateVideo}
                // didPostRequestSucceed={didPostRequestSucceed}
                // setDidPostRequestSucceed={setDidPostRequestSucceed}
              />
              <div className="default-plans-container">
                {/*<AddCard type="video" handleClick={() => handleAddVideoClick(toggleOverlay)} />*/}
                {allDefaultPlans.map((p) => <p>p</p>)}
              </div>
            </>
          )}
        </div>
      )}
    </OverlayContext.Consumer>
  )
}
export default DefaultPlans
