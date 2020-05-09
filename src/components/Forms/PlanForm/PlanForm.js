import React, { useState } from 'react'
import {
  Form,
  Input,
  Button,
  Tabs,
  Select,
  Tag,
} from 'antd'
import { cloneDeep } from 'lodash'
import '../form.scss'

const { TabPane } = Tabs
const { Option } = Select

const PlanForm = (props) => {
  console.log('PlanForm')
  const {
    formTitle, formDescription, dataToEdit, handleFormSubmit, allDefaultPlans,
  } = props

  const [selectedDefaultPlans, setSelectedDefaultPlans] = useState([])


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
    normalizedFormData.defaultPlanIDs = selectedDefaultPlans
    handleFormSubmit(normalizedFormData)
  }

  function renderOption(defaultPlan) {
    return <Option value={defaultPlan.id}>{defaultPlan.name}</Option>
  }

  function handleSelectChange(arrOfSelectedOptions) {
    setSelectedDefaultPlans(arrOfSelectedOptions)
  }

  return (
    <Form className="form has-tabs" layout="vertical" onFinish={handleFinish}>
      <Tabs defaultActiveKey="2">
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
            <Form.Item label="choose default plan:">
              <Select
                mode="multiple"
                style={{ width: '60%' }}
                placeholder="select default plans..."
                onChange={handleSelectChange}
              >
                {allDefaultPlans.map(renderOption)}
              </Select>
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
