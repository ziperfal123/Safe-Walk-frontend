import React, {
  useEffect, useRef, useState, useForm,
} from 'react'
import {
  Form,
  Input,
  Button,
  Tabs,
  Select,
  InputNumber,
} from 'antd'
import { cloneDeep } from 'lodash'
import classNames from 'classnames'
import '../form.scss'
import { MODAL, PLAN_FORM } from 'utils/consts'

const { TabPane } = Tabs
const { Option } = Select

const PlanForm = (props) => {
  console.log('PlanForm')
  const {
    formTitle,
    formDescription,
    dataToEdit,
    handleFormSubmit,
    allDefaultPlans,
    allVideos,
    patientId,
  } = props
  const [name, setNameField] = useState((dataToEdit && dataToEdit.name) || '')
  const [instructions, setInstructionsField] = useState((dataToEdit && dataToEdit.instructions) || '')
  const [videos, setVideosField] = useState((dataToEdit && dataToEdit.videos) || [])
  const [defaultPlans, setDefaultPlansField] = useState((dataToEdit && dataToEdit.defaultPlans) || [])
  const nameInputRef = useRef(null)
  const [form] = Form.useForm()

  useEffect(() => {
    let normalizedVideosArr = [...videos]
    normalizedVideosArr = normalizedVideosArr.map((video) => ({
      videoID: video.videoID,
      times: video.times,
    }))
    setVideosField(normalizedVideosArr)
  }, [])

  useEffect(() => {
    nameInputRef.current.focus()
    dataToEdit && dataToEdit.name && form.setFieldsValue({ name: dataToEdit.name })
  }, [])

  useEffect(() => {
    dataToEdit && setNameField(dataToEdit.name)
  }, [])


  function handleFinish() {
    let finalFormData
    if (dataToEdit) {
      finalFormData = {
        name,
        instructions,
        videos,
        defaultPlanIDs: defaultPlans || [],
      }
    } else {
      finalFormData = {
        name,
        instructions,
        videos,
        defaultPlanIDs: defaultPlans || [],
        patientID: patientId,
      }
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


  function handleNameChange(field) {
    setNameField(field.target.value)
  }

  function handleInstructionsChange(field) {
    setInstructionsField(field.target.value)
  }

  function handleSelectChange(arrOfSelectedOptions) {
    setDefaultPlansField(arrOfSelectedOptions)
  }

  function handleVideosClick(videoId, e) {
    if (e.target.className !== '' && e.target.className !== 'label-container') return

    let isVideoAlreadyInList = false
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].videoID === videoId) {
        isVideoAlreadyInList = true
        break
      }
    }
    let updatedVideosArr = [...videos]
    if (isVideoAlreadyInList) {
      updatedVideosArr = updatedVideosArr.filter(({ videoID }) => videoID !== videoId)
    } else {
      const tmpVideoObj = {
        videoID: videoId,
        times: 1,
      }
      updatedVideosArr.push(tmpVideoObj)
    }
    setVideosField(updatedVideosArr)
  }

  function handleNumberChange(videoId, inputValue) {
    const updatedVideosArr = cloneDeep(videos)
    for (let i = 0; i < updatedVideosArr.length; i++) {
      if (updatedVideosArr[i].videoID === videoId) {
        updatedVideosArr[i].times = inputValue
        break
      }
    }
    setVideosField(updatedVideosArr)
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
          <label className="name-label">{video.name}</label>
          { isSelected
          && (
          <div className="input-number-container">
            <label>times:</label>
            <InputNumber
              defaultValue={timesToSet}
              min={1}
              onChange={(e) => handleNumberChange(video.id, e)}
              placeholder="Enter number of times"
            />
          </div>
          )}
        </div>
        <iframe height={150} width={400} src={video.link} />
      </div>
    )
  }

  return (
    <Form className="form has-tabs" layout="vertical" onFinish={handleFinish} form={form}>
      <Tabs defaultActiveKey="1">
        <TabPane tab={PLAN_FORM.planInfoTab} key="1">
          <div className="tab-content-container">
            <h1>{formTitle}</h1>
            <p>{formDescription}</p>
            <Form.Item
              rules={[
                { required: true, message: 'Plan name is required' },
                { required: true, min: 3, message: 'Name should contain at least 3 characters' },
              ]}
              label={PLAN_FORM.nameLabel}
              name="name"
              initialValue={(dataToEdit && dataToEdit.name) || ''}
            >
              <Input
                className="form-input"
                defaultValue={(dataToEdit && dataToEdit.name) || ''}
                onChange={handleNameChange}
                ref={nameInputRef}
              />
            </Form.Item>
            <Form.Item
              label={PLAN_FORM.instructionsLabal}
              name="instructions"
            >
              <Input
                className="form-input"
                defaultValue={(dataToEdit && dataToEdit.instructions !== MODAL.optionalPlaceholderToIgnore && dataToEdit.instructions) || ''}
                onChange={handleInstructionsChange}
              />
            </Form.Item>
          </div>
        </TabPane>
        <TabPane tab={PLAN_FORM.videosAndPlansTab} key="2">
          <div className="tab-content-container">
            <Form.Item label={PLAN_FORM.defaultPlansLabel}>
              <Select
                defaultValue={(dataToEdit && dataToEdit.defaultPlans && [...dataToEdit.defaultPlans]) || []} // TODO:: normalize data so it can be shown in Select list. match it with the default plans list and take the relevant name
                mode="multiple"
                style={{ width: '60%' }}
                placeholder={PLAN_FORM.selectPlansPlaceholder}
                onChange={handleSelectChange}
              >
                {allDefaultPlans.map(renderOption)}
              </Select>
            </Form.Item>
            <Form.Item label={PLAN_FORM.chooseVideosLabel}>
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
