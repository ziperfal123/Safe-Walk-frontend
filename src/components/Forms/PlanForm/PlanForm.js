import React from 'react'
import {
  Form,
  Input,
  Button,
  Tabs,
} from 'antd'
import '../form.scss'

const { TabPane } = Tabs
const { TextArea } = Input

const PlanForm = ({ formTitle, formDescription }) =>

// function handleFinish(formData) {
//   handleFormSubmit(formData)
// }

  (
    <Form className="form has-tabs" layout="vertical">
      <Tabs defaultActiveKey="1">
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
              <Input className="form-input" />
            </Form.Item>
            <Form.Item
              rules={
                [
                  { required: true, message: 'Instructions are required' },
                  { required: true, min: 10, message: 'Name should contain at least 10 characters' },
                ]
              }
              label="instructions:"
              name="instructions"
            >
              <TextArea className="form-input" />
            </Form.Item>
          </div>
        </TabPane>
        <TabPane tab="videos & default plans" key="2">
          <div className="tab-content-container">
            <h2>World</h2>
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


export default PlanForm
