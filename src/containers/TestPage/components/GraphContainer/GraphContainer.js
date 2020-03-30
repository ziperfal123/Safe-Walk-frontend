import React from 'react'
import PropTypes from 'prop-types'
import {
  XYPlot, LineSeries, HorizontalGridLines, VerticalGridLines, XAxis, YAxis,
} from 'react-vis'
import 'containers/TestPage/testPage.scss'

const GraphContainer = (props) => {
  const {
    dataSetX, dataSetY, dataSetZ, label,
  } = props


  const verticalTickValues = [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000]
  const horizontalTickValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]

  return (
    <div className="graph-container">
      <h3 className="sensor-title">{label}</h3>
      <XYPlot height={340} width={850} className="xy-container">
        <VerticalGridLines tickValues={verticalTickValues} />
        <HorizontalGridLines tickValues={horizontalTickValues} />
        <XAxis on0 />
        <YAxis on0 />
        <LineSeries
          data={dataSetX}
          curve={null}
          style={{
            stroke: 'green',
            strokeLinejoin: 'round',
            strokeWidth: '3px',
          }}
        />
        <LineSeries
          data={dataSetY}
          curve={null}
          style={{
            stroke: 'blue',
            strokeLinejoin: 'round',
            strokeWidth: '3px',
          }}
        />
        <LineSeries
          data={dataSetZ}
          curve={null}
          style={{
            stroke: 'orange',
            strokeLinejoin: 'round',
            strokeWidth: '3px',
          }}
        />

      </XYPlot>
      <h3 className="sensor-title sensor-title--second">{`${label}- perfect results`}</h3>
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
  // <div className="graph-container">
  //   <h3 className="sensor-title">{label}</h3>
  //   <XYPlot height={400} width={1100} className="xy-container" margin={{ right: 40 }}>
  //     <HorizontalGridLines />
  //     <VerticalGridLines />
  //     <LineSeries
  //       curve={null}
  //       data={dataSetX}
  //       opacity={0.6}
  //       style={{
  //         stroke: 'orange',
  //         strokeLinejoin: 'round',
  //         strokeWidth: '3px',
  //       }}
  //     />
  //   </XYPlot>
  // </div>
  )
}

export default GraphContainer


GraphContainer.propTypes = {
  gaitModel: PropTypes.objectOf(PropTypes.any),
  loadingGaitModel: PropTypes.bool.isRequired,
  getGaitModelByTestId: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
}
