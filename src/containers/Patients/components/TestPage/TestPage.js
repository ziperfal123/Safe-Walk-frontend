import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { getGaitModelByTestId } from 'redux/gaitModel/actionsCreator'
import { Spin } from 'antd'

const TestPage = ({
  gaitModel, loadingGaitModel, getGaitModelByTestId, testId,
}) => {
  console.log('TestPage')

  useEffect(() => {
    getGaitModelByTestId(testId)
  }, [])

  return (
    <>
      {loadingGaitModel ? (
        <div>
          <Spin />
          <h4>this might take a minute..</h4>
        </div>
      ) : (
        <h1>TEST PAGE</h1>
      )}
    </>
  )
}

export default TestPage


TestPage.propTypes = {
  gaitModel: PropTypes.objectOf(PropTypes.any),
  loadingGaitModel: PropTypes.bool.isRequired,
  getGaitModelByTestId: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
}
