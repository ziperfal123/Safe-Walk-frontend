import React from 'react'
import { Modal as AntModal } from 'antd'
import Logo from 'components/SideBar/files/logo.svg'
import './modal.scss'

const Modal = (props) => {
  console.log('Modal', props)
  const {
    FormToRender,
    handleSubmit,
    formTitle,
    formDescription,
  } = props

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
        <FormToRender handleSubmit={handleSubmit} />
      </div>
    </AntModal>
  )
}

export default Modal
