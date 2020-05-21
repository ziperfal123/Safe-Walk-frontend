import React, { useState } from 'react'
import { Radio } from 'antd'
import PropTypes from 'prop-types'
import Chart from 'react-google-charts'
import {
  VictoryChart, VictoryZoomContainer, VictoryLine, VictoryAxis, VictoryTheme,
} from 'victory'

import 'containers/TestPage/testPage.scss'

const GraphContainer = (props) => {
  const {
    dataSetX, dataSetY, dataSetZ, sensor,
  } = props

  const [zoomDomain, setZoomDomain] = useState(1)
  const [radioValue, setRadioValue] = useState('x')

  function handleZoom(domain) {
    setZoomDomain(domain)
  }

  function handleRadioClick(e) {
    setRadioValue(e.target.value)
  }

  function normalizeData() {
    const d = sensor.accelerations.x.map((point) => [point.x, point.y])

    d.unshift(['x', 'dogs'])
    console.log('d: ', d)
    return d
  }
  const data = [
    ['x', 'dogs'],
    [sensor.accelerations.x[0].x, sensor.accelerations.x[0].y],
    [sensor.accelerations.x[1].x, sensor.accelerations.x[1].y],
    [sensor.accelerations.x[2].x, sensor.accelerations.x[2].y],
    [sensor.accelerations.x[3].x, sensor.accelerations.x[3].y],
    [sensor.accelerations.x[4].x, sensor.accelerations.x[4].y],
    [sensor.accelerations.x[5].x, sensor.accelerations.x[5].y],
  ]
  console.log('data: ', data)
  return (
    <div className="graph-container">
      <div className="container-header">
        <Chart
          width="100%"
          height="575px"
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={normalizeData()}
          options={{
            hAxis: {
              title: 'Time',
            },
            vAxis: {
              title: 'Popularity',
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
        {' '}
      </div>
    </div>
  )
}
export default GraphContainer


GraphContainer.propTypes = {
  dataSetX: PropTypes.arrayOf(PropTypes.any).isRequired,
  dataSetY: PropTypes.arrayOf(PropTypes.any).isRequired,
  dataSetZ: PropTypes.arrayOf(PropTypes.any).isRequired,
  sensor: PropTypes.string.isRequired,
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
