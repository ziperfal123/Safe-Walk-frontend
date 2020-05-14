import React, {useEffect, useRef, useState} from 'react'
import {
  Form,
  Input,
  Button,
  Tabs,
  Select,
} from 'antd'
import classNames from 'classnames'
import '../form.scss'

const { TabPane } = Tabs
const { Option } = Select

const PlanForm = (props) => {
  console.log('PlanForm')
  const {
    formTitle, formDescription, dataToEdit, handleFormSubmit, allDefaultPlans, allVideos,
  } = props
  console.log('dataToEdit: ', dataToEdit)
  const [name, setNameField] = useState(dataToEdit.name)
  const [instructions, setInstructionsField] = useState(dataToEdit.instructions)
  const [videos, setVideosField] = useState(dataToEdit.videos || [])
  const [defaultPlans, setDefaultPlansField] = useState(dataToEdit.defaultPlans)
  const nameInputRef = useRef(null)

  useEffect(() => {
    let normalizedVideosArr = [...videos]
    normalizedVideosArr = normalizedVideosArr.map((video) => video.videoID)
    setVideosField(normalizedVideosArr)
  }, [])

  useEffect(() => {
    nameInputRef.current.focus()
  }, [])



  function handleFinish() {
    const finalFormData = {
      name,
      instructions,
      videos,
      defaultPlanIDs: defaultPlans || [],
    }
    handleFormSubmit(finalFormData)
  }

  function renderOption(defaultPlan, index) {
    return (
      <Option value={defaultPlan.id} key={index}>
        {defaultPlan.name}
      </Option>
    )
  }

  function renderVideo(video, index) {
    const isSelected = videos.includes(video.id)
    const videoClasses = classNames({
      'video-box': true,
      'selected': isSelected,
    })
    return (
      <div className={videoClasses} key={index} onClick={() => handleVideosChange(video.id)}>
        <label>{video.name}</label>
        <iframe height={150} width={400} src={video.link} />
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

  function handleVideosChange(videoId) {
    const isVideoAlreadyInList = videos.includes(videoId)
    let updatedVideosArr = [...videos]
    if (isVideoAlreadyInList) {
      updatedVideosArr = updatedVideosArr.filter((id) => id !== videoId)
    } else {
      updatedVideosArr.push(videoId)
    }
    setVideosField(updatedVideosArr)
  }


  return (
    <Form className="form has-tabs" layout="vertical" onFinish={handleFinish}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="plan information" key="1">
          <div className="tab-content-container">
            <h1>{formTitle}</h1>
            <p>{formDescription}</p>
            <Form.Item
              rules={[
                { required: true, message: 'Plan name is required' },
                { required: true, min: 3, message: 'Name should contain at least 3 characters' },
              ]}
              label="plan name:"
              name="name"
            >
              <Input
                  className="form-input"
                  defaultValue={dataToEdit && dataToEdit.name}
                  onChange={handleNameChange}
                  ref={nameInputRef}
              />
            </Form.Item>
            <Form.Item
              label="instructions:"
              name="instructions"
            >
              <Input className="form-input" defaultValue={dataToEdit && dataToEdit.instructions} onChange={handleInstructionsChange} />
            </Form.Item>
          </div>
        </TabPane>
        <TabPane tab="videos & default plans" key="2">
          <div className="tab-content-container">
            <Form.Item label="choose default plan:">
              <Select
                defaultValue={dataToEdit && dataToEdit.defaultPlans && [...dataToEdit.defaultPlans]} // TODO:: normalize data so it can be shown in Select list. match it with the default plans list and take the relevant name
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
