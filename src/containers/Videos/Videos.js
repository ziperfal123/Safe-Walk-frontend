import React, { useContext, useEffect, useState } from 'react'
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
    if (deletionRespone !== API.deleteRequestSuccess) {
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
      activateErrorModal(creationResponse)
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
                type="video"
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
