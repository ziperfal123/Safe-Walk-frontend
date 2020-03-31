import React, { useEffect } from 'react'
import GraphContainer from 'containers/TestPage/components/GraphContainer'
import { Spin } from 'antd'
import 'containers/TestPage/testPage.scss'
import PropTypes from 'prop-types'


const TestPage = (props) => {
  console.log('TestPAge: ', props)
  const {
    gaitModel, loadingGaitModel, getGaitModelByTestId, testId,
  } = props

  useEffect(() => {
    getGaitModelByTestId(testId)
  }, [])

  function renderSensorsContainer(key) {
    if (key === 'testID' || key === 'id') return

    const dataSetX = []
    const dataSetY = []
    const dataSetZ = []

    gaitModel[key].forEach((obj) => {
      dataSetX.push({ x: obj.timeStamp, y: obj.pitch_angle_x })
      dataSetY.push({ x: obj.timeStamp, y: obj.roll_angle_y })
      dataSetZ.push({ x: obj.timeStamp, y: obj.yaw_angle_z })
    })

    return (
      <GraphContainer
        dataSetX={dataSetX}
        dataSetY={dataSetY}
        dataSetZ={dataSetZ}
        sensor={key}
      />
    )
  }

  return (
    <>
      {loadingGaitModel || !gaitModel ? (
        <div className="loading-test">
          <Spin />
          <h3>it might take a minute..</h3>
        </div>
      ) : (
        <>
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
  gaitModel: PropTypes.objectOf(PropTypes.any),
  loadingGaitModel: PropTypes.bool.isRequired,
  getGaitModelByTestId: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
}
