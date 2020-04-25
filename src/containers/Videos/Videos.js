import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import {videosPageModalSchema} from 'consts/modalSchemas'
import AddCard from 'components/AddCard'
import VideoCard from 'components/VideoCard'
import Modal from 'components/Modal'

import './videos.scss'

const Videos = (props) => {
  console.log('Videos Page')
  const { getAllVideos, allVideos, loadingAllVideos } = props

  const [isModalVisible, toggleModal] = useState(false)

  useEffect(() => {
    getAllVideos()
  }, [])

  function handleAddVideoClick() {
    toggleModal(true)
  }
  function handleCancelClick() {
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
    <div className="videos-page">
      {loadingAllVideos || !allVideos ? (
        <div className="loading-videos">
          <Spin />
        </div>
      ) : (
        <>
          <div className="videos-container">
            <AddCard type="video" handleClick={handleAddVideoClick} />
            {allVideos.map(renderVideo)}
          </div>
          <Modal
            visible={isModalVisible}
            onCancel={handleCancelClick}
            {...videosPageModalSchema}
          />
        </>
      )}
    </div>
  )
}

export default Videos


Videos.propTypes = ({
  getAllVideos: PropTypes.func.isRequired,
  allVideos: PropTypes.arrayOf(PropTypes.any).isRequired,
  loadingAllVideos: PropTypes.bool.isRequired,
})
