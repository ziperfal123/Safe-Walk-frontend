import React from 'react'
import {
  Form,
  Input,
  Button,
  Tabs,
} from 'antd'
import { cloneDeep } from 'lodash'
import '../form.scss'

const { TabPane } = Tabs

const PlanForm = ({
  formTitle, formDescription, dataToEdit, handleFormSubmit,
}) => {
  console.log('PlanForm')

  function normalizeFormData(formData) {
    const normalizedFormData = cloneDeep(formData)
    Object.keys(normalizedFormData).forEach((key) => {
      if (normalizedFormData[key] === undefined) {
        normalizedFormData[key] = dataToEdit[key]
      }
    })
    return normalizedFormData
  }

  function handleFinish(formData) {
    const normalizedFormData = normalizeFormData(formData)
    handleFormSubmit(normalizedFormData)
  }

  return (
    <Form className="form has-tabs" layout="vertical" onFinish={handleFinish}>
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
              <Input className="form-input" defaultValue={dataToEdit.name} />
            </Form.Item>
            <Form.Item
              label="instructions:"
              name="instructions"
            >
              <Input className="form-input" defaultValue={dataToEdit.instructions} />
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
}


export default PlanForm
