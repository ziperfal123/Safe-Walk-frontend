import React, { useEffect, useState } from 'react'
import {
  Form,
  Input,
  Button,
  Tabs,
  Select,
} from 'antd'
import '../form.scss'

const { TabPane } = Tabs
const { Option } = Select

const PlanForm = (props) => {
  console.log('PlanForm')
  const {
    formTitle, formDescription, dataToEdit, handleFormSubmit, allDefaultPlans, allVideos,
  } = props

  const [name, setNameField] = useState(dataToEdit.name)
  const [instructions, setInstructionsField] = useState(dataToEdit.instructions)
  const [videos, setVideosField] = useState(dataToEdit.videos || [])
  const [defaultPlans, setDefaultPlansField] = useState(dataToEdit.defaultPlans)

  useEffect(() => {
    let normalizedVideosArr = [...videos]
    normalizedVideosArr = normalizedVideosArr.map((video) => video.videoID)
    setVideosField(normalizedVideosArr)
  }, [])


  function handleFinish() {
    const videosIds = videos.map((video) => video.videoID)
    const finalFormData = {
      name,
      instructions,
      videos: videosIds,
      defaultPlanIDs: defaultPlans || [],
    }
    console.log('finalFormData: ', finalFormData)
    handleFormSubmit(finalFormData)
  }

  function renderOption(defaultPlan, index) {
    return (
      <Option value={defaultPlan.id} key={index}>
        {defaultPlan.name}
      </Option>
    )
  }

  function handleVideoClick(videoId) {
    const isVideoAlreadyInList = videos.includes(videoId)
    let updatedVideosArr = [...videos]
    if (isVideoAlreadyInList) {
      updatedVideosArr = updatedVideosArr.filter((id) => id !== videoId)
    } else {
      updatedVideosArr.push(videoId)
    }
    setVideosField(updatedVideosArr)
    console.log('videos: ', videos)
  }

  function renderVideo(video, index) {
    return (
      <div className="video-box" key={index} onClick={() => handleVideoClick(video.id)}>
        <label>{video.name}</label>
        <iframe height={150} width={400} src={video.link} title="hello" />
      </div>
    )
  }


  function handleNameChange(field) {
    setNameField(field.target.value)
  }

  function handleInstructionsChange(field) {
    setInstructionsField(field.target.value)
  }

  function handleSelectChange(arrOfSelectedOptions) {
    setDefaultPlansField(arrOfSelectedOptions)
  }


  return (
    <Form className="form has-tabs" layout="vertical" onFinish={handleFinish}>
      <Tabs defaultActiveKey="2">
        <TabPane tab="plan information" key="1">
          <div className="tab-content-container">
            <h1>{formTitle}</h1>
            <p>{formDescription}</p>
            <Form.Item
              rules={
                    [
                      { required: true, message: 'Plan name is required' },
                      { required: true, min: 3, message: 'Name should contain at least 3 characters' },
                    ]
                  }
              label="plan name:"
              name="name"
            >
              <Input className="form-input" defaultValue={dataToEdit.name} onChange={handleNameChange} />
            </Form.Item>
            <Form.Item
              label="instructions:"
              name="instructions"
            >
              <Input className="form-input" defaultValue={dataToEdit.instructions} onChange={handleInstructionsChange} />
            </Form.Item>
          </div>
        </TabPane>
        <TabPane tab="videos & default plans" key="2">
          <div className="tab-content-container">
            <Form.Item label="choose default plan:">
              <Select
                defaultValue={dataToEdit.defaultPlans && [...dataToEdit.defaultPlans]} // TODO:: normalize data so it can be shown in Select list. match it with the default plans list and take the relevant name
                mode="multiple"
                style={{ width: '60%' }}
                placeholder="select default plans..."
                onChange={handleSelectChange}
              >
                {allDefaultPlans.map(renderOption)}
              </Select>
            </Form.Item>
            <Form.Item label="choose videos: (click on the video's name)">
              {allVideos.map(renderVideo)}
            </Form.Item>
          </div>
        </TabPane>
      </Tabs>
      <Form.Item className="save-btn-container">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}


export default PlanForm
