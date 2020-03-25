import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import {
  XYPlot, LineSeries, HorizontalGridLines, VerticalGridLines,
} from 'react-vis'
import './test.scss'

const tmpData = [
  { x: 0, y: 0 },
  { x: 10, y: -0.3 },
  { x: 20, y: 0.6 },
  { x: 30, y: -0.7 },
  { x: 40, y: -1.8 },
  { x: 50, y: 0.6 },
  { x: 60, y: 1 },
  { x: 70, y: -1.8 },
]


const TestPage = ({
  gaitModel, loadingGaitModel, getGaitModelByTestId, testId,
}) => {
  console.log('TestPage')
  const [dataSet, setDataSet] = useState([])

  useEffect(() => {
    getGaitModelByTestId(testId)
  }, [])

  useEffect(() => {
    const dataHolder = []
    gaitModel && gaitModel.sensor1.forEach((obj, index) => {
      dataHolder[index] = { x: obj.timeStamp, y: obj.angle }
    })
    setDataSet(dataHolder)
  }, [gaitModel])

  return (
    <>
      {loadingGaitModel || !gaitModel ? (
        <div className="loading-test">
          <Spin />
          <h3>this might take a minute..</h3>
        </div>
      ) : (
        <div>
          <h1 className="test-title">Test Data</h1>
          <h3 className="sensor-title">Sensor #1: left knee</h3>
          <XYPlot height={400} width={1100} className="xy-container" margin={{ right: 40 }}>
            <HorizontalGridLines />
            <VerticalGridLines />
            <LineSeries
              curve={null}
              data={dataSet}
              opacity={1}
              stroke="#12939a"
              style={{
                stroke: 'black',
                strokeLinejoin: 'round',
                strokeWidth: '3px',
              }}
            />
            <LineSeries
              curve={null}
              data={tmpData}
              opacity={0.6}
              style={{
                stroke: 'orange',
                strokeLinejoin: 'round',
                strokeWidth: '3px',
              }}
            />
          </XYPlot>

          <h3 className="sensor-title sens">Sensor #2: right knee</h3>
          <XYPlot height={400} width={1100} className="xy-container xy-second" margin={{ right: 40 }}>
            <HorizontalGridLines />
            <VerticalGridLines />
            <LineSeries
              curve={null}
              data={dataSet}
              opacity={1}
              stroke="#12939a"
              style={{
                stroke: 'black',
                strokeLinejoin: 'round',
                strokeWidth: '3px',
              }}
            />
            <LineSeries
              curve={null}
              data={tmpData}
              opacity={0.6}
              style={{
                stroke: 'orange',
                strokeLinejoin: 'round',
                strokeWidth: '3px',
              }}
            />

          </XYPlot>
        </div>
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
