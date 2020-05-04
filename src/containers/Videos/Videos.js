import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import AddCard from 'components/AddCard'
import VideoCard from 'components/VideoCard'
import Modal from 'components/Modal'
import ErrorModal from 'components/ErrorModal'
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
  const [shouldOpenModal, setShouldOpenModal] = useState(false)
  const [errorObj, setErrorObj] = useState({ errorOccurred: false, errorMessage: '' })

  useEffect(() => {
    getAllVideos()
  }, [])

  function handleAddVideoClick(toggleOverlay) {
    toggleOverlay(true)
    setShouldOpenModal(true)
  }

  function handleCloseModal(toggleOverlay) {
    toggleOverlay(false)
    setShouldOpenModal(false)
  }

  function handleRemoveVideo() {
    alert('REMOVE!')
  }

  function renderVideo(video) {
    return (
      <VideoCard key={video.id} link={video.link} handleRemoveClick={handleRemoveVideo} />
    )
  }

  function fetchAllVideosAfterPost(toggleOverlay) {
    setDisplaySuccessMessageInModal(true)
    setTimeout(async () => {
      toggleOverlay(false)
      await getAllVideos()
      setShouldOpenModal(false)
      setDisplaySuccessMessageInModal(false)
    }, 1200)
  }

  async function handleFormSubmit(formData, toggleOverlay) {
    const creationResponse = await createVideo(formData)
    if (creationResponse === API.postRequestSuccess) {
      fetchAllVideosAfterPost(toggleOverlay)
    } else {
      setErrorObj({
        errorOccurred: true,
        errorMessage: (creationResponse && creationResponse.message) || 'some generic message..',
      })
    }
  }

  function handleOKErrorModal(toggleOverlay) {
    toggleOverlay(false)
    setShouldOpenModal(false)
    setErrorObj({
      errorOccurred: false,
      errorMessage: '',
    })
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
              {errorObj.errorOccurred && (
                <ErrorModal
                  handleOK={() => handleOKErrorModal(toggleOverlay)}
                  visible={errorObj.errorOccurred}
                  errorMessage={errorObj.errorMessage}
                  destroyOnClose
                />
              )}
              {shouldOpenModal && (
                <Modal
                  onCancel={() => handleCloseModal(toggleOverlay)}
                  handleSubmit={(formData) => handleFormSubmit(formData, toggleOverlay)}
                  visible={shouldOpenModal}
                  formTitle="Create a new Video"
                  formDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim consequat."
                  FormToRender={VideosForm}
                  isLoading={loadingCreateVideo}
                  displaySuccessMessageInModal={displaySuccessMessageInModal}
                />
              )}

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
