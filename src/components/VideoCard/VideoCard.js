import React from 'react'
import PropTypes from 'prop-types'
import "./videoCard.scss"

const VideoCard = ({ link, handleRemoveClick }) => (
  <div className="video-card-container">
    <iframe height={260} width={380} src={link}/>
  </div>
)

export default VideoCard

VideoCard.propTypes = ({
  handleRemoveClick: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
})
