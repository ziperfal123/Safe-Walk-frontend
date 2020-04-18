import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import AddCard from 'components/AddCard'
import './videos.scss'

const Videos = (props) => {
  console.log('Videos Page')
  const { getAllVideos } = props

  useEffect(() => {
    getAllVideos()
  }, [])

  function handleAddVideoClick() {
    alert('ADD!')
  }

  return (
    <div className="videos-container">
      <AddCard type="video" handleClick={handleAddVideoClick} />
      <
      <iframe
        title="video"
        height="280"
        width="385"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      />
    </div>
  )
}

export default Videos


Videos.propTypes = ({
  getAllVideos: PropTypes.func.isRequired,

})
