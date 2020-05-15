import React, { useEffect, useState } from 'react'
import { OverlayContext } from 'App'
import { Spin } from 'antd'
import AddCard from 'components/AddCard'
import Modal from 'components/Modal'
import DefaultPlansForm from 'components/Forms/DefaultPlanForm'
import DefaultPlanCard from 'components/DefaultPlanCard'
// import AddCard from "components/AddCard";
import 'containers/DefaultPlans/defaultPlans.scss'

const DefaultPlans = (props) => {
  const {
    allDefaultPlans,
    loadingAllDefaultPlans,
    getAllDefaultPlans,
    allVideos,
    getAllVideos,
    createDefaultPlan,
  } = props
  console.log('default plans')

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

  function handleRemoveDefaultPlan() {
    console.log('hey')
  }

  function handleOnCancelModal() {
    setShouldOpenModal(false)
  }

  function handleFormSubmit(formData) {
    console.log('formData', formData)
    createDefaultPlan(formData)
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
                FormToRender={DefaultPlansForm}
                allVideos={allVideos}
                  // isLoading={loadingCreateVideo}
                // didPostRequestSucceed={didPostRequestSucceed}
                // setDidPostRequestSucceed={setDidPostRequestSucceed}
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


/*
*
*
* import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Spin, Card } from 'antd'
import AddCard from 'components/AddCard'
import VideoCard from 'components/VideoCard'
import Modal from 'components/Modal'
import VideosForm from 'components/Forms/VideosForm'
import { API } from 'utils/consts'
import { OverlayContext } from '../../App'
import './videos.scss'

const Videos = (props) => {
  console.log('Videos Page')
  const {
    getAllVideos,
    createVideo,
    allVideos,
    loadingAllVideos,
    loadingCreateVideo,
    activateErrorModal,
    deleteVideo,
  } = props

  const [didPostRequestSucceed, setDidPostRequestSucceed] = useState(false)
  const [shouldOpenModal, setShouldOpenModal] = useState(false)

  useEffect(() => {
    getAllVideos()
  }, [])

  function handleAddVideoClick(toggleOverlay) {
    toggleOverlay(true)
    setShouldOpenModal(true)
  }

  async function handleRemoveVideo(idToDelete) {
    const deletionRespone = await deleteVideo(idToDelete)
    if (deletionRespone === API.deleteRequestSuccess) {
    } else {
      activateErrorModal(deletionRespone && deletionRespone.message)
    }

  }

  function renderVideo(video) {
    return (
      <VideoCard
        key={video.id}
        video={video}
        handleRemoveClick={handleRemoveVideo}
      />
    )
  }

  async function handleFormSubmit(formData) {
    const creationResponse = await createVideo(formData)
    if (creationResponse === API.postRequestSuccess) {
      setDidPostRequestSucceed(true)
      setShouldOpenModal(false)
    } else {
      activateErrorModal(creationResponse && creationResponse.message)
    }
  }

  function handleOnCancelModal() {
    setShouldOpenModal(false)
  }

  return (
    <OverlayContext.Consumer>
      {({ toggleOverlay }) => (
        <div className="videos-page">
          {loadingAllVideos || !allVideos ? (
            <div className="loading-videos">
              <Spin />
            </div>
          ) : (
            <>
              <Modal
                handleFormSubmit={(formData) => handleFormSubmit(formData)}
                handleOnCancel={handleOnCancelModal}
                visible={shouldOpenModal || didPostRequestSucceed}
                formTitle="Create a new Video"
                formDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim consequat."
                FormToRender={VideosForm}
                isLoading={loadingCreateVideo}
                didPostRequestSucceed={didPostRequestSucceed}
                setDidPostRequestSucceed={setDidPostRequestSucceed}
              />
              <div className="videos-container">
                <AddCard type="video" handleClick={() => handleAddVideoClick(toggleOverlay)} />
                {allVideos.map(renderVideo)}
              </div>
            </>
          )}
        </div>
      )}
    </OverlayContext.Consumer>
  )
}

export default Videos


Videos.propTypes = ({
  getAllVideos: PropTypes.func.isRequired,
  createVideo: PropTypes.func.isRequired,
  allVideos: PropTypes.arrayOf(PropTypes.any).isRequired,
  loadingAllVideos: PropTypes.bool.isRequired,
})

*
* */
