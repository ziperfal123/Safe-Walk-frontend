import React, { useEffect } from 'react'
import { Spin } from 'antd'
import PropTypes from 'prop-types'

import GraphContainer from 'containers/TestPage/components/GraphContainer'

import 'containers/TestPage/testPage.scss'
import BackButton from 'components/BackButton'


const TestPage = (props) => {
  console.log('TestPage')
  const {
    gaitModel, loadingGaitModel, getGaitModelByTestId, testId, cleanGaitModel, history, handleBackClick,
  } = props

  useEffect(() => {
    getGaitModelByTestId(testId)
    return () => { cleanGaitModel() }
  }, [])

  function renderSensorsContainer(key) {
    if (key === 'testID' || key === 'id' || key === '_id' || key === '__v') return null

    const dataSetX = []
    const dataSetY = []
    const dataSetZ = []

    gaitModel[key].accelerations.forEach((dataElement) => {
      dataSetX.push({ x: dataElement.timeStamp, y: dataElement.x })
      dataSetY.push({ x: dataElement.timeStamp, y: dataElement.y })
      dataSetZ.push({ x: dataElement.timeStamp, y: dataElement.z })
    })

    return (
      <GraphContainer
        key={key}
        dataSetX={dataSetX}
        dataSetY={dataSetY}
        dataSetZ={dataSetZ}
        sensor={key}
        cleanGaitModel={cleanGaitModel}
      />
    )
  }

  function handleBackButton() {
    history.goBack()
  }

  return (
    <>
      {!gaitModel || loadingGaitModel ? (
        <div className="loading-test">
          <Spin />
          <h3>it might take up to one minute..</h3>
        </div>
      ) : (
        <>
          <BackButton handleBackClick={handleBackClick} />
          <h1 className="test-title">Gait model data</h1>
          {
            Object.keys(gaitModel).map((key) => renderSensorsContainer(key))
          }
        </>
      )}
    </>
  )
}


export default TestPage


TestPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  gaitModel: PropTypes.objectOf(PropTypes.any).isRequired,
  loadingGaitModel: PropTypes.bool.isRequired,
  getGaitModelByTestId: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  cleanGaitModel: PropTypes.func.isRequired,
}
