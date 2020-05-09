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
    dataToEdit,
    allDefaultPlans,
    allVideos
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

  function handleModalClose(toggleOverlay, didUserForceCancel = false) {
    didUserForceCancel && handleOnCancel()
    toggleOverlay(false)
  }


  return (
    <OverlayContext.Consumer>
      {({ toggleOverlay }) => (
        <AntModal
          className="modal-container"
          width={660}
          footer={null}
          mask={false}
          afterClose={() => handleModalClose(toggleOverlay)}
          onCancel={() => handleModalClose(toggleOverlay, true)}
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
