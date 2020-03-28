import React, { useEffect, useState } from 'react'
import GraphContainer from 'containers/TestPage/components/GraphContainer'
import { Spin } from 'antd'
import {
  XYPlot, LineSeries, HorizontalGridLines, VerticalGridLines,
} from 'react-vis'
import 'containers/TestPage/test.scss'
import PropTypes from 'prop-types'
import TestPage_OLD from 'containers/TestPage/TestPage_OLD'

const TestPage = (props) => {
  const {
    gaitModel, loadingGaitModel, getGaitModelByTestId, testId,
  } = props

  const [dataSet, setDataSet] = useState([])


  useEffect(() => {
    getGaitModelByTestId(testId)
  }, [])

  useEffect(() => {
    const dataHolder = []
    gaitModel && gaitModel.sensor1.forEach((obj, index) => {
      dataHolder[index] = { x: obj.timeStamp, y: obj.pitch_angle_x }
    })
    setDataSet(dataHolder)
  }, [gaitModel])

  function renderSensorContainer() {
    return <h1>hello</h1>
  }


  return (
    <>
      {loadingGaitModel || !gaitModel ? (
        <div className="loading-test">
          <Spin />
          <h3>this might take a minute..</h3>
        </div>
      ) : (
        <>
          <h1 className="test-title">Test Data</h1>
          {renderSensorContainer()}
          <GraphContainer dataSet={dataSet} />
        </>
      )}
    </>
  )
}


export default TestPage


TestPage_OLD.propTypes = {
  gaitModel: PropTypes.objectOf(PropTypes.any),
  loadingGaitModel: PropTypes.bool.isRequired,
  getGaitModelByTestId: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
}
