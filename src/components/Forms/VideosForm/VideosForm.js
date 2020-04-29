import React from 'react'
import { Form, Input, Button } from 'antd'
import '../form.scss'

const VideosForm = (props) => {
  console.log('VideosForm')

  function handleFinish(e) {
    console.log('e: ', e)
  }
  return (
    <Form className="form" layout="vertical" onFinish={handleFinish}>
      <Form.Item
        label="video name:"
        name="videoName"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="video link:"
        name="videoLink"
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
