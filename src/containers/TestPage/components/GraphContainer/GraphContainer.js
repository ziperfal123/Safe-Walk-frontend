import React from 'react'
import PropTypes from 'prop-types'
import {
  XYPlot, LineSeries, HorizontalGridLines, VerticalGridLines,
} from 'react-vis'
import 'containers/TestPage/test.scss'

const GraphContainer = ({ dataSet }) => (
  <>
      <h3 className="sensor-title">Sensor #1: left knee</h3>
      <XYPlot height={400} width={1100} className="xy-container" margin={{ right: 40 }}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <LineSeries
          curve={null}
          data={dataSet}
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
      </XYPlot>
  </>
)

export default GraphContainer


GraphContainer.propTypes = {
  gaitModel: PropTypes.objectOf(PropTypes.any),
  loadingGaitModel: PropTypes.bool.isRequired,
  getGaitModelByTestId: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
}
