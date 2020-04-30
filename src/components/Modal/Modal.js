import React from 'react'
import { Modal as AntModal } from 'antd'
import Logo from 'components/SideBar/files/logo.svg'
import './modal.scss'

const Modal = (props) => {
  console.log('Modal', props)
  const { FormToRender } = props
  return (
    <AntModal
      className="modal-container"
      width={640}
      footer={null}
      mask={false}
      {...props}
    >
      <aside>
        <img src={Logo} />
      </aside>
      <div className={'form-wrapper'}>
        <h1>{props.formTitle}</h1>
        <p>
          {props.formDescription}
        </p>
        <FormToRender hell={"yan"} />
      </div>
    </AntModal>
  )
}

export default Modal
