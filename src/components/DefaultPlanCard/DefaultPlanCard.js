import React from 'react'
import { Card, message, Popconfirm } from 'antd'

const DefaultPlanCard = (props) => {
  console.log('DefaultPlanCard', props)

  const {plan} = props
  function handleRemove() {
    // handleRemoveClick(video.id)
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
      className="default-plan-card-container"
      title={plan.name}
      actions={renderDeleteAction()}
    >
      <div className={'inner-container'}>
        <p>{plan.instructions}</p>
        <p className={'num-of-videos'}>{`# of videos: ${plan.videos.length}`}</p>
      </div>
    </Card>
  )
}

export default DefaultPlanCard
