import React from 'react'
import { Modal as AntModal, Spin, Result } from 'antd'
import Logo from 'components/SideBar/files/logo.svg'
import './modal.scss'

const Modal = (props) => {
  console.log('Modal')
  const {
    FormToRender,
    handleSubmit,
    formTitle,
    formDescription,
    isLoading,
    displaySuccessMessageInModal,
  } = props

  function renderLoading() {
    return (
      <div className="loading-modal">
        <Spin />
        <h4>creating video...</h4>
      </div>
    )
  }

  function renderSuccessMessage() {
    return (
      <Result
        status="success"
        subTitle="video was created successfully"
      />
    )
  }


  return (
    <AntModal
      className="modal-container"
      width={640}
      footer={null}
      mask={false}
      {...props}
    >
      <aside>
        <img src={Logo} alt="logo" />
      </aside>
      <div className="form-wrapper">
        <h1>{formTitle}</h1>
        <p>
          {formDescription}
        </p>
        {isLoading || displaySuccessMessageInModal ? (
          <>
            {isLoading && renderLoading()}
            {displaySuccessMessageInModal && renderSuccessMessage()}
          </>
        ) : (
          <FormToRender handleSubmit={handleSubmit} />
        )}
      </div>
    </AntModal>
  )
}

export default Modal
