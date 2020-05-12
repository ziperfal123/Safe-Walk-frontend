import React from 'react'
import PropTypes from 'prop-types'
import { Card, Popconfirm, message } from 'antd'
import './videoCard.scss'

const VideoCard = ({ link, videoName, handleRemoveClick }) => {
  function displayConfirmMessage() {
    message.success('Deleting video...')
  }

  function renderDeleteAction() {
    return [
      <Popconfirm
        title="Are you sure delete this video?"
        onConfirm={displayConfirmMessage}
        okText="Delete"
        cancelText="Cancel"
      >
        <div>
          <i className="far fa-trash-alt fa-lg" />
        </div>
      </Popconfirm>,
    ]
  }
  return (

    <Card
      className="video-card-container"
      title={videoName}
      actions={renderDeleteAction()}
    >
      <iframe height={260} src={link} />
    </Card>
  )
}
export default VideoCard

VideoCard.propTypes = ({
  handleRemoveClick: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
})
