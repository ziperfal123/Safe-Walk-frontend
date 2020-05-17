import React from 'react'
import { Card, message, Popconfirm } from 'antd'
import './defaultPlanCard.scss'

const DefaultPlanCard = (props) => {
  const { plan, handleRemoveClick } = props

  function handleRemove() {
    handleRemoveClick(plan.id)
    message.success('Deleting default plan...')
  }

  function renderDeleteAction() {
    return [
      <Popconfirm
        title="Are you sure delete this video?"
        onConfirm={handleRemove}
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
