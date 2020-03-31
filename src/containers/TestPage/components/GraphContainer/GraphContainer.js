import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  XYPlot, LineSeries, HorizontalGridLines, VerticalGridLines, XAxis, YAxis,
} from 'react-vis'
import { Checkbox } from 'antd'
import 'containers/TestPage/testPage.scss'

const GraphContainer = (props) => {
  const {
    dataSetX, dataSetY, dataSetZ, sensor,
  } = props

  const [shouldShowX, setShouldShowX] = useState(true)
  const [shouldShowY, setShouldShowY] = useState(true)
  const [shouldShowZ, setShouldShowZ] = useState(true)

  // TODO:: dynamically sey values..
  const verticalTickValues = [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000]
  const horizontalTickValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]

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
  }

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

      default:
    }
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
      <XYPlot height={340} width={850} className="xy-container">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis on0 />
        <YAxis on0 />
        { shouldShowX && (
        <LineSeries
          data={dataSetX}
          curve={null}
          style={{
            stroke: 'green',
            strokeLinejoin: 'round',
            strokeWidth: '3px',
          }}
        />
        )}
        {shouldShowY && (
        <LineSeries
          data={dataSetY}
          curve={null}
          style={{
            stroke: 'purple',
            strokeLinejoin: 'round',
            strokeWidth: '3px',
          }}
        />
        )}
        { shouldShowZ && (
        <LineSeries
          data={dataSetZ}
          curve={null}
          style={{
            stroke: 'orange',
            strokeLinejoin: 'round',
            strokeWidth: '3px',
          }}
          s
        />
        )}
      </XYPlot>
      <div className="container-header">
        <h3 className="sensor-title sensor-title--second">{`${label}- perfect results`}</h3>
      </div>
      <XYPlot height={340} width={850} className="xy-container">
        <VerticalGridLines tickValues={verticalTickValues} />
        <HorizontalGridLines tickValues={horizontalTickValues} />
        <XAxis on0 />
        <YAxis on0 />
        <LineSeries
          data={dataSetZ}
          curve={null}
          style={{
            stroke: 'black',
            strokeLinejoin: 'round',
            strokeWidth: '3px',
          }}
        />
      </XYPlot>
    </div>
  )
}

export default GraphContainer


GraphContainer.propTypes = {
  gaitModel: PropTypes.objectOf(PropTypes.any),
  loadingGaitModel: PropTypes.bool.isRequired,
  getGaitModelByTestId: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
}
