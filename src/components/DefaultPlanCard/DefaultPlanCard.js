import React from "react";
import {Card, message, Popconfirm} from "antd";

const DefaultPlanCard = (props) => {
  console.log('DefaultPlanCard')

  const {} = props
  function handleRemove() {
    // handleRemoveClick(video.id)
  }

  function displayConfirmMessage() {
    handleRemove()
    message.success('Deleting video...')
  }

  // function renderDeleteAction() {
  //   return [
  //     <Popconfirm
  //         title="Are you sure delete this video?"
  //         onConfirm={displayConfirmMessage}
  //         okText="Delete"
  //         cancelText="Cancel"
  //     >
  //       <div>
  //         <i className="far fa-trash-alt fa-lg" />
  //       </div>
  //     </Popconfirm>,
  //   ]
  // }
  return (

      <Card
          // className="video-card-container"
          // title={video.name}
          // actions={renderDeleteAction()}
      >
        {/*<iframe height={260} src={video.link} />*/}
      </Card>
  )
}

export default DefaultPlanCard