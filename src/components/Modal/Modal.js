import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, Modal as AntModal } from 'antd'
import Logo from 'components/SideBar/files/logo.svg'
import './modal.scss'

const { TabPane } = Tabs

const Modal = (props) => {
  const {
    modalInnerTitle,
    description,
    hasTabs,
    formLabels,
  } = props
  console.log('Modal')

  function renderInputFields() {
    return (
        <div>
        <label>WHAT!!</label>
          <input placeholder={"some placeholder"}></input>
        </div>
    )
  }

  return (
    <AntModal
      className="modal-container"
      width={650}
      {...props}
    >
      <aside>
        <img className="logo" src={Logo} alt="logo" />
      </aside>
      <main style={{ height: window.innerHeight / 2 }}>
        {hasTabs ? (
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">
              <div className="content-wrapper" style={{ height: window.innerHeight / 2 - 30 }}>
                <h2>{modalInnerTitle}</h2>
                <p>{description}</p>
              </div>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        ) : (
          <div className="content-wrapper" style={{ height: window.innerHeight / 2 - 10 }}>
            <h2>{modalInnerTitle}</h2>
            <p>{description}</p>
            {formLabels.map(renderInputFields)}
          </div>
        )}

      </main>
    </AntModal>
  )
}

export default Modal


Modal.defaultProps = {
  hasTabs: false,
}

Modal.propTypes = ({
  modalInnerTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hasTabs: PropTypes.bool,
})
