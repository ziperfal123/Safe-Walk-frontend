import React, {
  useEffect, useRef, useState,
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
import {FORM, MODAL, PLAN_FORM} from 'utils/consts'
import { calculateDiffBetweenDates } from 'utils/date'

const { TabPane } = Tabs
const { Option } = Select

const PlanForm = (props) => {
  const {
    formTitle,
    formDescription,
    dataToEdit,
    handleFormSubmit,
    allDefaultPlans,
    allVideos,
    patientId,
    therapistId,
  } = props

  const [name, setNameField] = useState((dataToEdit && dataToEdit.name) || '')
  const [instructions, setInstructionsField] = useState((dataToEdit && dataToEdit.instructions) || '')
  const [executionTime, setExecutionTime] = useState(1)
  const [videos, setVideosField] = useState((dataToEdit && dataToEdit.videos) || [])
  const [defaultPlans, setDefaultPlansField] = useState((dataToEdit && dataToEdit.defaultPlans) || [])
  const nameInputRef = useRef(null)
  const [form] = Form.useForm()

  useEffect(() => {
    let normalizedVideosArr = [...videos]
    normalizedVideosArr = normalizedVideosArr.map((video) => ({
      videoID: video.videoID,
      times: video.times,
      priority: video.priority,
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
        executionTime,
        videos,
        defaultPlanIDs: defaultPlans || [],
      }
    } else {
      finalFormData = {
        name,
        instructions,
        executionTime,
        videos,
        defaultPlans: defaultPlans || [],
        patientID: patientId,
        therapistID: therapistId,
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

  function handleExecutionChange(fieldValue) {
    setExecutionTime(fieldValue)
  }

  function handleDefaultPlansSelectChange(arrOfSelectedOptions) {
    setDefaultPlansField(arrOfSelectedOptions)
  }

  function handleVideosClick(videoId, e) {
    if (e.target.className !== '' && e.target.className !== 'label-container' && e.target.className !== 'name-label') return

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
        priority: 'Low',
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

  function handlePriorityChange(priorityValue, videoId) {
    const updatedVideosArr = cloneDeep(videos)
    for (let i = 0; i < updatedVideosArr.length; i++) {
      if (updatedVideosArr[i].videoID === videoId) {
        updatedVideosArr[i].priority = priorityValue
        break
      }
    }
    setVideosField(updatedVideosArr)
  }


  function renderVideo(video, index) {
    let isSelected = false
    let timesToSet = 1
    let priority = 'Low'
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].videoID === video.id) {
        isSelected = true
        timesToSet = videos[i].times
        priority = videos[i].priority
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
          <div className="videos-inputs-container">
            <label>times:</label>
            <InputNumber
              defaultValue={timesToSet}
              min={1}
              onChange={(e) => handleNumberChange(video.id, e)}
              placeholder="Enter number of times"
            />
            <label className="priority-label">priority:</label>
            <Select
              defaultValue={priority}
              style={{ width: 100 }}
              onChange={(selectValue) => handlePriorityChange(selectValue, video.id)}
            >
              <Option value="Low">Low</Option>
              <Option value="Medium">Medium</Option>
              <Option value="High">High</Option>
            </Select>
          </div>
          )}
        </div>
        <iframe height={150} width={400} src={video.link} allowFullScreen />
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
                { required: true, min: 3, message: FORM.nameWarning },
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
              label={PLAN_FORM.instructionsLabel}
              name="instructions"
            >
              <Input
                className="form-input"
                defaultValue={(dataToEdit && dataToEdit.instructions !== MODAL.optionalPlaceholderToIgnore && dataToEdit.instructions) || ''}
                onChange={handleInstructionsChange}
              />
            </Form.Item>
            <div className="execution-input-wrapper">
              <label>{PLAN_FORM.executionLabel}</label>
              <InputNumber
                defaultValue={(dataToEdit && dataToEdit.executionTime && calculateDiffBetweenDates(dataToEdit.executionTime)) || 1}
                min={1}
                onChange={handleExecutionChange}
              />
            </div>
          </div>
        </TabPane>
        <TabPane tab={PLAN_FORM.videosAndPlansTab} key="2">
          <div className="tab-content-container">
            { !dataToEdit
            && (
            <Form.Item label={PLAN_FORM.defaultPlansLabel}>
              <Select
                defaultValue={(dataToEdit && dataToEdit.defaultPlans && [...dataToEdit.defaultPlans]) || []}
                mode="multiple"
                style={{ width: '60%' }}
                placeholder={PLAN_FORM.selectPlansPlaceholder}
                onChange={handleDefaultPlansSelectChange}
              >
                {allDefaultPlans.map(renderOption)}
              </Select>
            </Form.Item>
            )}
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
