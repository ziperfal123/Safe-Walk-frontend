import React, { useEffect, useRef } from 'react'
import {
  Form, Input, Button, InputNumber, Radio,
} from 'antd'
import '../form.scss'

const PatientForm = ({ handleFormSubmit, formTitle, formDescription }) => {
  console.log('PatientForm')

  const nameInputRef = useRef(null)

  useEffect(() => {
    nameInputRef.current.focus()
  }, [])

  function handleFinish(formData) {
    console.log('formData: ', formData)
    // handleFormSubmit(formData)
  }
  return (
    <Form className="form" layout="vertical" onFinish={handleFinish}>
      <div className="tab-content-container">
        <h1>{formTitle}</h1>
        <p>{formDescription}</p>
        <Form.Item
          rules={
                [
                  { required: true, message: 'Patient name is required' },
                  { required: true, min: 3, message: 'Name should contain at least 3 characters' },
                ]
              }
          label="patient name:"
          name="name"
        >
          <Input className="form-input" ref={nameInputRef} />
        </Form.Item>
        <Form.Item
          rules={
                [
                  { required: true, message: 'email is required' },
                  { required: true, type: 'email', message: 'Please enter a valid email address' },
                ]
              }
          label="patient email:"
          name="mail"
        >
          <Input className="form-input" />
        </Form.Item>
        <Form.Item
          label="patient picture:"
          name="picture"
        >
          <Input className="form-input" />
        </Form.Item>
        <Form.Item
          label="patient picture:"
          name="picture"
        >
          <Input className="form-input" />
        </Form.Item>
        <Form.Item
          label="patient age:"
          name="age"
        >
          <InputNumber className="form-input" min={18} defaultValue={18} />
        </Form.Item>
        <Form.Item
          label="gender:"
          name="gender"
        >
          <Radio.Group onChange={() => console.log('change')}>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="phone number:"
          name="phoneNumber"
        >
          <Input className="form-input" />
        </Form.Item>
        <Form.Item
          label="sensors kit id:"
          name="sensorsKitID"
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

export default PatientForm
