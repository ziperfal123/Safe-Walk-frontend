import React, {useEffect} from 'react'
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
  } = props

  useEffect(() => {
    console.log('first')
    didPostRequestSucceed && setTimeout(async () => {
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
          width={640}
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
            <h1>{formTitle}</h1>
            <p>
              {formDescription}
            </p>
            {isLoading || didPostRequestSucceed ? (
              <>
                {isLoading && renderLoading()}
                {didPostRequestSucceed && renderSuccessMessage()}
              </>
            ) : (
              <FormToRender handleFormSubmit={handleFormSubmit} />
            )}
          </div>
        </AntModal>
      )}
    </OverlayContext.Consumer>
  )
}

export default Modal
