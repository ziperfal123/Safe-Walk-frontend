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
    handleFormSubmit(formData)
  }
  return (
    <Form className="form" layout="vertical" onFinish={handleFinish}>
      <div className="tab-content-container">
        <h1>{formTitle}</h1>
        <p>{formDescription}</p>
        <Form.Item
          label="patient name:"
          name="name"
          rules={
                [
                  { required: true, message: 'Patient name is required' },
                  { required: true, min: 3, message: 'Name should contain at least 3 characters' },
                ]
              }
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
          label="patient password:"
          name="password"
          rules={
              [
                { required: true, message: 'password is required' },
                { required: true, min: 6, message: 'password has to be at least 6 characters' },
              ]
            }
        >
          <Input.Password className="form-input" />
        </Form.Item>
        <Form.Item
          label="patient phone number:"
          name="phoneNumber"
          rules={
            [
              { required: true, message: 'phone number is required' },
              { required: true, pattern: '^\\d{10}$', message: 'phone number should contain exactly 10 numbers' },
            ]
          }
        >
          <Input className="form-input" />
        </Form.Item>
        <Form.Item
          label="patient picture:"
          name="picture"
          rules={
              [
                { required: true, message: 'Patient picture is required' },
              ]
            }
        >
          <Input className="form-input" />
        </Form.Item>
        <Form.Item
          label="gender:"
          name="gender"
        >
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="patient's age:"
          name="age"
        >
          <InputNumber className="form-input" min={18} defaultValue={18} />
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
