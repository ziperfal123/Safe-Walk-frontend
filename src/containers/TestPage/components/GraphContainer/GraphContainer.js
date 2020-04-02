import React, { useState } from 'react'
import { Radio } from 'antd'
import PropTypes from 'prop-types'
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
      <div style={{ display: 'flex' }}>
        <VictoryChart
          containerComponent={(
            <VictoryZoomContainer
              zoomDimension="x"
              zoomDomain={zoomDomain}
              onZoomDomainChange={handleZoom}
            />
            )}
          height={340}
          maxDomain={{ y: 10 }}
          style={{
            parent: { maxWidth: '50%' },
            labels: { fontSize: 16 },
          }}
          theme={VictoryTheme.material}
        >
          {radioValue === 'x' && (
          <VictoryLine
            data={dataSetX}
            style={{
              data: { stroke: 'green', strokeWidth: 1 },
              labels: { fontSize: 16 },
              parent: { border: '1px solid #ccc' },
            }}
          />
          )}
          { radioValue === 'y' && (
          <VictoryLine
            data={dataSetY}
            style={{
              data: { stroke: 'purple', strokeWidth: 1 },
              labels: { fontSize: 16 },
              parent: { border: '1px solid #ccc' },
            }}
          />
          )}
          {radioValue === 'z' && (
          <VictoryLine
            data={dataSetZ}
            style={{
              data: { stroke: 'orange', strokeWidth: 1 },
              labels: { fontSize: 16 },
              parent: { border: '1px solid #ccc' },
            }}
          />
          )}
          <VictoryAxis
            dependentAxis
            label="something else"
            style={{
              axisLabel: { fontSize: 12, padding: 30 },
              tickLabels: { fontSize: 12, padding: 5 },
            }}
          />
          <VictoryAxis
            label="time stamp"
            style={{
              axisLabel: { fontSize: 12, padding: 50 },
              tickLabels: { fontSize: 12, padding: 5 },
            }}
          />
        </VictoryChart>
        <VictoryChart
          containerComponent={(
            <VictoryZoomContainer
              // zoomDimension="x"
              zoomDomain={zoomDomain}
              onZoomDomainChange={handleZoom}
            />
            )}
          height={340}
          maxDomain={{ x: 900, y: 10 }}
          style={{
            parent: { maxWidth: '50%' },
            labels: { fontSize: 16 },
          }}
          theme={VictoryTheme.material}
        >
          {radioValue === 'x' && (
          <VictoryLine
            data={dataSetX}
            style={{
              data: { stroke: 'green', strokeWidth: 1 },
              labels: { fontSize: 16 },
              parent: { border: '1px solid #ccc' },
            }}
          />
          )}
          { radioValue === 'y' && (
          <VictoryLine
            data={dataSetY}
            style={{
              data: { stroke: 'purple', strokeWidth: 1 },
              labels: { fontSize: 16 },
              parent: { border: '1px solid #ccc' },
            }}
          />
          )}
          {radioValue === 'z' && (
          <VictoryLine
            data={dataSetZ}
            style={{
              data: { stroke: 'orange', strokeWidth: 1 },
              labels: { fontSize: 16 },
              parent: { border: '1px solid #ccc' },
            }}
          />
          )}
          <VictoryAxis
            dependentAxis
            label="something else"
            style={{
              axisLabel: { fontSize: 12, padding: 30 },
              tickLabels: { fontSize: 12, padding: 5 },
            }}
          />
          <VictoryAxis
            label="time stamp"
            style={{
              axisLabel: { fontSize: 12, padding: 30 },
              tickLabels: { fontSize: 12, padding: 5 },
            }}
          />
        </VictoryChart>
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
