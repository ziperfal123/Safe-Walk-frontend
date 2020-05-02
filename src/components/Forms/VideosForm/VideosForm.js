import React from 'react'
import { Form, Input, Button } from 'antd'
import '../form.scss'

const VideosForm = ({ handleSubmit }) => {
  console.log('VideosForm')

  function handleFinish(formData) {
    handleSubmit(formData)
  }
  return (
    <Form className="form" layout="vertical" onFinish={handleFinish}>
      <Form.Item
        label="video name:"
        name="name"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="video link:"
        name="link"
      >
        <Input />
      </Form.Item>
      <Form.Item className={'save-btn-container'}>
        <Button type={"primary"} htmlType={"submit"}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default VideosForm
