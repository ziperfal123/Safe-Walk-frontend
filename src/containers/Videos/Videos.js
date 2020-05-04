import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
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
    getAllVideos, createVideo, allVideos, loadingAllVideos, loadingCreateVideo,
  } = props

  const [displaySuccessMessageInModal, setDisplaySuccessMessageInModal] = useState(false)

  useEffect(() => {
    getAllVideos()
  }, [])

  function handleAddVideoClick(toggleOverlay) {
    toggleOverlay(true)
  }

  function handleCloseModal(toggleOverlay) {
    toggleOverlay(false)
  }

  function handleRemoveVideo() {
    alert('REMOVE!')
  }

  function renderVideo(video) {
    return (
      <VideoCard key={video.id} link={video.link} handleRemoveClick={handleRemoveVideo} />
    )
  }

  async function handleFormSubmit(formData, toggleModal) {
    const creationStatus = await createVideo(formData)
    if (creationStatus === API.postRequestSuccess) {
      setDisplaySuccessMessageInModal(true)
      setTimeout(() => {
        toggleModal(false)
        setDisplaySuccessMessageInModal(false)
      }, 1300)
    }
  }

  return (
    <OverlayContext.Consumer>
      {({ shouldOpenModal, toggleModal }) => (
        <div className="videos-page">
          {loadingAllVideos || !allVideos ? (
            <div className="loading-videos">
              <Spin />
            </div>
          ) : (
            <>
              <Modal
                onCancel={() => handleCloseModal(toggleModal)}
                handleSubmit={(formData) => handleFormSubmit(formData, toggleModal)}
                visible={shouldOpenModal}
                formTitle="Create a new Video"
                formDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim consequat."
                FormToRender={VideosForm}
                isLoading={loadingCreateVideo}
                displaySuccessMessageInModal={displaySuccessMessageInModal}
              />
              <div className="videos-container">
                <AddCard type="video" handleClick={() => handleAddVideoClick(toggleModal)} />
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
