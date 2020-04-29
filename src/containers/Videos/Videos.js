import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Spin, Button } from 'antd'
import InputWithLabel from 'components/InputWithLabel'
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

  function handleSave(a) {
    console.log('a' , a)
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
            // visible={isModalVisible}
            visible
            onCancel={handleCancelClick}
            form={<VideosForm handleSave={handleSave} />}
          />
        </>
      )}
    </div>
  )
}

export default Videos


const VideosForm = ({ handleSave }) => {
  const [inputA, setInputA] = useState('')
  function handleChange(e) {
    console.log('e: ', e.target.value)
  }
  return (
    <>
      <Form className="content-wrapper">
        <h2>Add a new Video</h2>
        <p>add another video to the videos inventory. copy the link from youtube and paste it in the relevant input field. Once you will add the video, it will automatically attached to this default plan</p>
        <InputWithLabel label="Video Name" placeholder="Please enter video name" onChange={handleChange} />
        <InputWithLabel label="Video Link" placeholder="Please enter video link" />
      </Form>
      <Button className="save-btn" onClick={handleSave}>SAVE</Button>
    </>
  )
}


Videos.propTypes = ({
  getAllVideos: PropTypes.func.isRequired,
  allVideos: PropTypes.arrayOf(PropTypes.any).isRequired,
  loadingAllVideos: PropTypes.bool.isRequired,
})
