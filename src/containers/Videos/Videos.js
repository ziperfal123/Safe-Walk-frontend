import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import AddCard from 'components/AddCard'
import VideoCard from 'components/VideoCard'
import Modal from 'components/Modal'
import VideosForm from 'components/Forms/VideosForm'
import { OverlayContext } from '../../App'

import './videos.scss'

const Videos = (props) => {
  console.log('Videos Page')
  const { getAllVideos, allVideos, loadingAllVideos } = props

  const [isModalOpen, toggleModal] = useState(false)
  useEffect(() => {
    getAllVideos()
  }, [])

  function handleAddVideoClick(toggleOverlay) {
    toggleOverlay(true)
    toggleModal(true)
  }

  function handleCloseModal(toggle) {
    toggle(false)
    toggleModal(false)
  }

  function handleRemoveVideo() {
    alert('REMOVE!')
  }

  function renderVideo(video) {
    return (
      <VideoCard key={video.id} link={video.link} handleRemoveClick={handleRemoveVideo} />
    )
  }

  return (
    <OverlayContext.Consumer>
      {({ toggle }) => (
        <div className="videos-page">
          {loadingAllVideos || !allVideos ? (
            <div className="loading-videos">
              <Spin />
            </div>
          ) : (
            <>
              <Modal
                onCancel={() => handleCloseModal(toggle)}
                visible={isModalOpen}
                formTitle="Create a new Video"
                formDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim consequat."
                FormToRender={VideosForm}
              />
              <div className="videos-container">
                <AddCard type="video" handleClick={() => handleAddVideoClick(toggle)} />
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
  allVideos: PropTypes.arrayOf(PropTypes.any).isRequired,
  loadingAllVideos: PropTypes.bool.isRequired,
})
