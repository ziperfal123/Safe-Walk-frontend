import React, { useEffect, useRef } from 'react'
import {
  Form, Input, Button, InputNumber, Radio,
} from 'antd'
import '../form.scss'
import {FORM} from "utils/consts";

const PatientForm = ({ handleFormSubmit, formTitle, formDescription }) => {

  const nameInputRef = useRef(null)

  useEffect(() => {
    nameInputRef.current.focus()
  }, [])

  function handleFinish(formData) {
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
                  { required: true, min: 3, message: FORM.nameWarning },
                ]
              }
        >
          <Input className="form-input" ref={nameInputRef} />
        </Form.Item>
        <Form.Item
          rules={
                [
                  { required: true, message: 'email is required' },
                  { required: true, type: 'email', message: FORM.emailWarning },
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
                { required: true, min: 6, message: FORM.passwordWarning },
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
              { required: true, pattern: '^\\d{10}$', message: FORM.phoneNumberWarning},
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
          rules={
            [
              { required: true, message: 'Patient age is required' },
            ]
          }
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
