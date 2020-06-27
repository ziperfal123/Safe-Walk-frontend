import React from 'react'
import PropTypes from 'prop-types'
import { Card, Popconfirm, message } from 'antd'
import './videoCard.scss'

const VideoCard = (props) => {
  const {
    video,
    handleRemoveClick,
  } = props

  function handleRemove() {
    handleRemoveClick(video.id)
  }

  function displayConfirmMessage() {
    handleRemove()
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
      title={video.name}
      actions={renderDeleteAction()}
    >
      <iframe height={260} src={video.link} allowFullScreen />
    </Card>
  )
}
export default VideoCard

VideoCard.propTypes = ({
  handleRemoveClick: PropTypes.func.isRequired,
  link: PropTypes.string,
})

VideoCard.defaultProps = {
  link: '',
}
