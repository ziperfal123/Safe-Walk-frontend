import React, { useEffect, useRef } from 'react'
import { Form, Input, Button } from 'antd'
import { getVideoId } from 'utils/youtube'
import '../form.scss'

const VideosForm = ({ handleFormSubmit, formTitle, formDescription }) => {
  const nameInputRef = useRef(null)

  useEffect(() => {
    nameInputRef.current.focus()
  }, [])

  function handleFinish(formData) {
    const videoId = getVideoId(formData.link)
    const normalizedFormData = { ...formData, link: `https://www.youtube.com/embed/${videoId}` }
    handleFormSubmit(normalizedFormData)
  }
  return (
    <Form className="form" layout="vertical" onFinish={handleFinish}>
      <div className="tab-content-container">
        <h1>{formTitle}</h1>
        <p>{formDescription}</p>
        <Form.Item
          rules={
          [
            { required: true, message: 'Video name is required' },
            { required: true, min: 3, message: 'Name should contain at least 3 characters' },
          ]
        }
          label="video name:"
          name="name"
        >
          <Input className="form-input" ref={nameInputRef} />
        </Form.Item>
        <Form.Item
          rules={
          [
            { required: true, message: 'Video link is required' },
            { required: true, type: 'url', message: 'Please enter a valid url' },
          ]
        }
          label="video link:"
          name="link"
        >
          <Input className="form-input" />
        </Form.Item>
      </div>
      <Form.Item className="save-btn-container">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default VideosForm
