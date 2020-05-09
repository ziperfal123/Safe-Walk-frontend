import React from 'react'
import { Form, Input, Button } from 'antd'
import '../form.scss'

const VideosForm = ({ handleFormSubmit, formTitle, formDescription }) => {
  console.log('VideosForm')

  function handleFinish(formData) {
    handleFormSubmit(formData)
  }
  return (
    <Form className="form" layout="vertical" onFinish={handleFinish}>
      <div className='box'>
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
        <Input className={'form-input'} />
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
        <Input className={'form-input'} />
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
