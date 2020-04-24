import React from 'react'
import { Tabs, Modal as AntModal } from 'antd'
import Logo from 'components/SideBar/files/logo.svg'
import './modal.scss'

const { TabPane } = Tabs

const Modal = (props) => {
  console.log('Modal')
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
        {true ? (
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">
              <div className="content-wrapper tab-content" style={{ height: window.innerHeight / 2 - 30 }}>
                <h2>{props.modalInnerTitle}</h2>
                <p>{props.description}</p>
              </div>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        ) : (
          <div className="content-wrapper content-container" style={{ height: window.innerHeight / 2 - 10 }}>
            <h2>{props.modalInnerTitle}</h2>
            <p>{props.description}</p>
          </div>
        )}

      </main>
    </AntModal>
  )
}

export default Modal
