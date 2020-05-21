import React, {useEffect, useState} from 'react'
import { Radio, Spin } from 'antd'
import PropTypes from 'prop-types'
import Chart from 'react-google-charts'
import {
  VictoryChart, VictoryZoomContainer, VictoryLine, VictoryAxis, VictoryTheme,
} from 'victory'

import 'containers/TestPage/testPage.scss'

const GraphContainer = (props) => {
  const { sensor } = props

  const [radioValue, setRadioValue] = useState('x')

  useEffect(() => {
    
  })

  function handleRadioClick(e) {
    console.log('e: ', e)
    setRadioValue(e.target.value)
  }

  function normalizeData() {
    const d = sensor.accelerations.x.map((point) => [point.x, point.y])
    d.unshift(['time stamp', 'find a proper name'])
    return d
  }

  return (
    <div className="graph-container">
      <div className="container-header">
        <Radio.Group className="radio-container" onChange={handleRadioClick}>
          <Radio
            className="radio--green"
            value="x"
            checked={radioValue === 'x'}
          >
            <span>Show X</span>
          </Radio>
          <Radio
            className="radio--purple"
            value="y"
            checked={radioValue === 'y'}
          >
            Show Y
          </Radio>
          <Radio
            className="radio--orange"
            value="z"
            checked={radioValue === 'z'}
          >
            Show Z
          </Radio>
        </Radio.Group>
      </div>
      <Chart
        width="100%"
        height="90%"
        chartType="LineChart"
        loader={<Spin className="loading-section" />}
        data={normalizeData()}
        options={{
          hAxis: {
            title: 'Time',
          },
          vAxis: {
            title: 'find the right string here',
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )
}
export default GraphContainer


GraphContainer.propTypes = {
  sensor: PropTypes.objectOf(PropTypes.any).isRequired,
}


/*
*
*   return (

    // <div className="graph-container">
    //   <div className="container-header">
    //     <h3 className="sensor-title">{'k'}</h3>
    //     <Radio.Group className="radio-container" onChange={handleRadioClick}>
    //       <Radio
    //         className="radio--green"
    //         value="x"
    //         checked={radioValue === 'x'}
    //       >
    //         <span>Show X</span>
    //       </Radio>
    //       <Radio
    //         className="radio--purple"
    //         value="y"
    //         checked={radioValue === 'y'}
    //       >
    //         Show Y
    //       </Radio>
    //       <Radio
    //         className="radio--orange"
    //         value="z"
    //         checked={radioValue === 'z'}
    //       >
    //         Show Z
    //       </Radio>
    //     </Radio.Group>
    //   </div>
    //   <div style={{ }}>
    //     <VictoryChart
    //       containerComponent={(
    //         <VictoryZoomContainer
    //           zoomDimension="x"
    //           zoomDomain={zoomDomain}
    //           onZoomDomainChange={handleZoom}
    //         />
    //         )}
    //       height={340}
    //       maxDomain={{ y: 10 }}
    //       style={{
    //         parent: { maxWidth: '50%' },
    //         labels: { fontSize: 16 },
    //       }}
    //       theme={VictoryTheme.material}
    //     >
    //       {radioValue === 'x' && (
    //       <VictoryLine
    //         data={dataSetX}
    //         style={{
    //           data: { stroke: 'green', strokeWidth: 1 },
    //           labels: { fontSize: 16 },
    //           parent: { border: '1px solid #ccc' },
    //         }}
    //       />
    //       )}
    //       { radioValue === 'y' && (
    //       <VictoryLine
    //         data={dataSetY}
    //         style={{
    //           data: { stroke: 'purple', strokeWidth: 1 },
    //           labels: { fontSize: 16 },
    //           parent: { border: '1px solid #ccc' },
    //         }}
    //       />
    //       )}
    //       {radioValue === 'z' && (
    //       <VictoryLine
    //         data={dataSetZ}
    //         style={{
    //           data: { stroke: 'orange', strokeWidth: 1 },
    //           labels: { fontSize: 16 },
    //           parent: { border: '1px solid #ccc' },
    //         }}
    //       />
    //       )}
    //       <VictoryAxis
    //         dependentAxis
    //         label="something else"
    //         style={{
    //           axisLabel: { fontSize: 12, padding: 30 },
    //           tickLabels: { fontSize: 12, padding: 5 },
    //         }}
    //       />
    //       <VictoryAxis
    //         label="time stamp"
    //         style={{
    //           axisLabel: { fontSize: 12, padding: 50 },
    //           tickLabels: { fontSize: 12, padding: 5 },
    //         }}
    //       />
    //     </VictoryChart>
    //   </div>
    // </div>
  )
*/
