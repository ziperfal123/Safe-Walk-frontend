import React, { useState } from 'react'
import { Checkbox } from 'antd'
import PropTypes from 'prop-types'
import {
  XYPlot, LineSeries, HorizontalGridLines, VerticalGridLines, XAxis, YAxis,
} from 'react-vis'
import {
  VictoryChart, VictoryScatter, VictoryLine, VictoryAxis,
} from 'victory'

import 'containers/TestPage/testPage.scss'


const GraphContainer = (props) => {
  const {
    dataSetX, dataSetY, dataSetZ, sensor,
  } = props

  const [shouldShowX, setShouldShowX] = useState(true)
  const [shouldShowY, setShouldShowY] = useState(true)
  const [shouldShowZ, setShouldShowZ] = useState(true)

  function handleChange(e, line) {
    switch (line) {
      case 'x':
        setShouldShowX(e.target.checked)
        break
      case 'y':
        setShouldShowY(e.target.checked)
        break
      case 'z':
        setShouldShowZ(e.target.checked)
        break
    }
  }


  let label
  switch (sensor) {
    case 'sensor1':
      label = 'Right Ankle: '
      break
    case 'sensor2':
      label = 'Left Ankle: '
      break
    case 'sensor3':
      label = 'Right Knee: '
      break
    case 'sensor4':
      label = 'Left Knee: '
      break
    case 'sensor5':
      label = 'Right right: '
      break
    case 'sensor6':
      label = 'Left left: '
      break
    case 'sensor7':
      label = 'Center of mass: '
      break

    default:
      label = 'sensors data: '
  }

  return (
    <div className="graph-container">
      <div className="container-header">
        <h3 className="sensor-title">{label}</h3>
        <div className="checkbox-container">
          <Checkbox
            className="checkbox checkbox--green"
            defaultChecked
            onChange={(e) => handleChange(e, 'x')}
          >
            <span>Show X</span>
          </Checkbox>
          <Checkbox
            className="checkbox checkbox--purple"
            defaultChecked
            onChange={(e) => handleChange(e, 'y')}
          >
            Show Y
          </Checkbox>
          <Checkbox
            className="checkbox checkbox--orange"
            defaultChecked
            onChange={(e) => handleChange(e, 'z')}
          >
            Show Z
          </Checkbox>
        </div>
      </div>
      <VictoryChart
        height={250}
        maxDomain={{ x: 900, y: 10 }}
        style={{
          parent: { maxWidth: '100%'},
          labels: { fontSize: 16 },
        }}
      >
        <VictoryLine
          data={dataSetX}
          samples={2}
          style={{
            data: { stroke: 'orange', strokeWidth: 1 },
            labels: { fontSize: 16 },
            parent: { border: '1px solid #ccc' },
          }}
        />
        <VictoryAxis
          dependentAxis
          label="something else"
          style={{
            axisLabel: { fontSize: 10, padding: 30 },
            tickLabels: { fontSize: 10, padding: 5 },
          }}
        />
        <VictoryAxis
          label="time stamp"
          style={{
            axisLabel: { fontSize: 10, padding: 30 },
            tickLabels: { fontSize: 10, padding: 5 },
          }}
        />
      </VictoryChart>

      {/* <XYPlot height={320} width={850} className="xy-container"> */}
      {/*  <VerticalGridLines /> */}
      {/*  <HorizontalGridLines /> */}
      {/*  <XAxis on0 /> */}
      {/*  <YAxis on0 /> */}
      {/*  { shouldShowX && ( */}
      {/*  <LineSeries */}
      {/*    data={dataSetX} */}
      {/*    curve={null} */}
      {/*    style={{ */}
      {/*      stroke: 'green', */}
      {/*      strokeLinejoin: 'round', */}
      {/*      strokeWidth: '1px', */}
      {/*    }} */}
      {/*  /> */}
      {/*  )} */}
      {/*  {shouldShowY && ( */}
      {/*  <LineSeries */}
      {/*    data={dataSetY} */}
      {/*    curve={null} */}
      {/*    style={{ */}
      {/*      stroke: 'purple', */}
      {/*      strokeLinejoin: 'round', */}
      {/*      strokeWidth: '1px', */}
      {/*    }} */}
      {/*  /> */}
      {/*  )} */}
      {/*  { shouldShowZ && ( */}
      {/*  <LineSeries */}
      {/*    data={dataSetZ} */}
      {/*    curve={null} */}
      {/*    style={{ */}
      {/*      stroke: 'orange', */}
      {/*      strokeLinejoin: 'round', */}
      {/*      strokeWidth: '1px', */}
      {/*    }} */}
      {/*    s */}
      {/*  /> */}
      {/*  )} */}
      {/* </XYPlot> */}
      {/* <div className="container-header"> */}
      {/*  <h3 className="sensor-title sensor-title--second">{`${label}- perfect results`}</h3> */}
      {/* </div> */}
      {/* <XYPlot height={320} width={850} className="xy-container"> */}
      {/*  <VerticalGridLines /> */}
      {/*  <HorizontalGridLines /> */}
      {/*  <XAxis on0 /> */}
      {/*  <YAxis on0 /> */}
      {/*  <LineSeries */}
      {/*    data={dataSetZ} */}
      {/*    curve={null} */}
      {/*    style={{ */}
      {/*      stroke: 'black', */}
      {/*      strokeLinejoin: 'round', */}
      {/*      strokeWidth: '1px', */}
      {/*    }} */}
      {/*  /> */}
      {/* </XYPlot> */}
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
