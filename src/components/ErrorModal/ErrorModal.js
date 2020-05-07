import React from 'react'
import { Modal as AntModal, Button } from 'antd'
import './errorModal.scss'

const ErrorModal = (props) => {
  console.log('ErrorModal')
  const {errorMessage, cleanError } = props

  function handleOK() {
    cleanError()
  }
  return (
    <AntModal
      className="error-modal-container"
      width={540}
      mask={false}
      closable={false}
      footer={[
        <Button onClick={handleOK}>
          OK
        </Button>,
      ]}
      {...props}
    >
      <h2>Oops... Error has occured</h2>
      <p>{errorMessage}</p>
    </AntModal>
  )
}

export default ErrorModal
