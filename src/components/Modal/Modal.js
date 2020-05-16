import React, { useEffect } from 'react'
import { Modal as AntModal, Spin, Result } from 'antd'
import Logo from 'components/SideBar/files/logo.svg'
import './modal.scss'
import { OverlayContext } from 'App'

const Modal = (props) => {
  console.log('Modal')
  const {
    FormToRender,
    handleFormSubmit,
    handleOnCancel,
    formTitle,
    formDescription,
    isLoading,
    didPostRequestSucceed,
    setDidPostRequestSucceed,
    dataToEdit = null,
    allDefaultPlans = null,
    allVideos = null,
    patientId,
    therapistId,
    type = 'data',
    modalWidth = 660,
  } = props

  useEffect(() => {
    didPostRequestSucceed
      && setTimeout(async () => {
        setDidPostRequestSucceed(false)
      }, 1000)
  }, [didPostRequestSucceed])

  function renderLoading() {
    return (
      <div className="loading-modal">
        <Spin />
        <h4>{`creating ${type}...`}</h4>
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

  function handleModalClose(toggleOverlay, didUserForceCancel = false) {
    didUserForceCancel && handleOnCancel()
    toggleOverlay(false)
  }


  return (
    <OverlayContext.Consumer>
      {({ toggleOverlay }) => (
        <AntModal
          className="modal-container"
          width={modalWidth}
          footer={null}
          mask={false}
          afterClose={() => handleModalClose(toggleOverlay)}
          onCancel={() => handleModalClose(toggleOverlay, true)}
          destroyOnClose
          {...props}
        >
          <aside>
            <img src={Logo} alt="logo" />
          </aside>
          <div className="form-wrapper">
            { isLoading || didPostRequestSucceed ? (
              <>
                {isLoading && renderLoading()}
                {didPostRequestSucceed && renderSuccessMessage()}
              </>
            ) : (
              <FormToRender
                formTitle={formTitle}
                formDescription={formDescription}
                handleFormSubmit={handleFormSubmit}
                patientId={patientId}
                therapistId={therapistId}
                dataToEdit={dataToEdit || null}
                allDefaultPlans={allDefaultPlans || null}
                allVideos={allVideos || null}
              />
            )}
          </div>
        </AntModal>
      )}
    </OverlayContext.Consumer>
  )
}

export default Modal
