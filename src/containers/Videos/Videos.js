import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import AddCard from 'components/AddCard'
import VideoCard from 'components/VideoCard'
import Modal from 'components/Modal'
import VideosForm from 'components/Forms/VideosForm'
import './videos.scss'

const Videos = (props) => {
  console.log('Videos Page')
  const { getAllVideos, allVideos, loadingAllVideos } = props

  const [isModalOpen, toggleModal] = useState(false)
  useEffect(() => {
    getAllVideos()
  }, [])

  function handleAddVideoClick() {
    toggleModal(true)
  }

  function handleCloseModal() {
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
          <Modal
            onCancel={handleCloseModal}
            visible={isModalOpen}
            formTitle={"Create a new Video"}
            formDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim consequat."}
            FormToRender={VideosForm}
          />
          <div className="videos-container">
            <AddCard type="video" handleClick={handleAddVideoClick} />
            {allVideos.map(renderVideo)}
          </div>
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
