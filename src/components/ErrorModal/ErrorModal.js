import React from 'react'
import { Modal as AntModal, Button } from 'antd'
import './errorModal.scss'

const ErrorModal = (props) => {
  const { errorMessage, cleanError } = props

  function handleCloseErrorModal() {
    cleanError()
  }
  return (
    <AntModal
      className="error-modal-container"
      mask
      onCancel={handleCloseErrorModal}
      footer={[
        <Button onClick={handleCloseErrorModal}>
          OK
        </Button>,
      ]}
      {...props}
    >
      <h2>Oops... Error has occured</h2>
      <i className="fas fa-exclamation-circle fa-5x" />
      <p>{errorMessage}</p>
    </AntModal>
  )
}

export default ErrorModal
