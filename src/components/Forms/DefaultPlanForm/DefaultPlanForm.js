import React, { useEffect, useRef, useState } from 'react'
import {
  Button, Form, Input, Select, Tabs, InputNumber
} from 'antd'
import { cloneDeep } from 'lodash'
import { DEFAULT_PLAN_FORM } from 'utils/consts'
import classNames from 'classnames'

const { TabPane } = Tabs
const { Option } = Select

const DefaultPlanForm = (props) => {
  console.log('DefaultPlanForm')
  const {
    formTitle,
    formDescription,
    dataToEdit,
    handleFormSubmit,
    allVideos,
  } = props

  const nameInputRef = useRef(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    nameInputRef.current.focus()
  }, [])

  useEffect(() => {
  })

  function handleFinish(formData) {
    console.log('formData: ', formData)
    const finalFormData = {
      name: formData.name,
      instructions: formData.instructions,
      videos,
    }
    handleFormSubmit(formData)
  }

  function handleVideosClick(videoId) {
    let isVideoAlreadyInList = false
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].videoID === videoId) {
        isVideoAlreadyInList = true
        break
      }
    }
    let updatedVideosArr = cloneDeep(videos)
    if (isVideoAlreadyInList) {
      updatedVideosArr = updatedVideosArr.filter(({ videoID }) => videoID !== videoId)
    } else {
      const tmpVideoObj = {
        videoID: videoId,
        times: 1,
      }
      updatedVideosArr.push(tmpVideoObj)
    }
    setVideos(updatedVideosArr)
  }

  function renderVideo(video, index) {
    let isSelected = false
    let timesToSet = 1
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].videoID === video.id) {
        isSelected = true
        timesToSet = videos[i].times
      }
    }
    const videoClasses = classNames({
      'video-box': true,
      selected: isSelected,
    })
    return (
        <div className={videoClasses} key={index} onClick={(e) => handleVideosClick(video.id, e)}>
          <div className="label-container">
            <label className={'name-label'}>{video.name}</label>
            { isSelected
            && (
                <div className={'input-number-container'}>
                  <label>times:</label>
                  <InputNumber
                      defaultValue={timesToSet}
                      min={1}
                      // onChange={(e) => handleNumberChange(video.id, e)}
                      placeholder="Enter number of times"
                  />
                </div>
            )}
          </div>
          <iframe height={150} width={376} src={video.link} />
        </div>
    )
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
              label={DEFAULT_PLAN_FORM.nameLabel}
              name="name"
            >
              <Input
                className="form-input"
                defaultValue={dataToEdit && dataToEdit.name}
                    // onChange={handleNameChange}
                ref={nameInputRef}
              />
            </Form.Item>
            <Form.Item
              label={DEFAULT_PLAN_FORM.instructionsLabal}
              name="instructions"
            >
              <Input className="form-input" defaultValue={dataToEdit && dataToEdit.instructions} onChange={() => console.log('hey')} />
            </Form.Item>
          </div>
        </TabPane>
        <TabPane tab="videos" key="2">
          <div className="tab-content-container">
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

export default DefaultPlanForm
