import React from 'react'
import PropTypes from 'prop-types'
import {
  Tabs, Modal as AntModal, Button, Form,
} from 'antd'
import Logo from 'components/SideBar/files/logo.svg'
import InputWithLabel from 'components/InputWithLabel'
import './modal.scss'

const { TabPane } = Tabs

const Modal = (props) => {
  const {
    modalInnerTitle,
    description,
    modalTabs,
    form,
  } = props
  console.log('Modal')

  function renderTab(tab, index) {
    console.log('tab: ', tab)
    return (
      <TabPane tab={`tab ${index + 1}`} key={index + 1}>
        <form className="content-wrapper" style={{ height: window.innerHeight / 2 - 30 }}>
          <h2>{modalInnerTitle}</h2>
          <p>{description}</p>
        </form>
      </TabPane>
    )
  }


  return (
    <AntModal
      className="modal-container"
      width={650}
      footer={null}
      {...props}
    >
      <aside>
        <img className="logo" src={Logo} alt="logo" />
      </aside>
      <main style={{ height: window.innerHeight / 2 }}>
        {false ? (
          <Tabs defaultActiveKey="1">
            {modalTabs.map(renderTab)}
          </Tabs>
        ) : (
          <div style={{ height: window.innerHeight / 2 - 10 }}>
            {form}
            {/*<Button className="save-btn">SAVE</Button>*/}
          </div>
        )}
      </main>
    </AntModal>
  )
}

export default Modal


Modal.propTypes = ({
  modalInnerTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  modalTabs: PropTypes.arrayOf(Object).isRequired,
})
