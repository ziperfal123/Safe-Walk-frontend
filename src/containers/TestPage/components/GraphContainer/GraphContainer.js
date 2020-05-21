import React, { useEffect, useState } from 'react'
import { Radio, Spin, Tabs } from 'antd'
import PropTypes from 'prop-types'
import Chart from 'react-google-charts'
import 'containers/TestPage/testPage.scss'

const { TabPane } = Tabs

const GraphContainer = (props) => {
  const { sensor } = props

  const [radioValue, setRadioValue] = useState('x')
  const [activeTab, setActiveTab] = useState(1)


  function handleRadioClick(e) {
    setRadioValue(e.target.value)
  }

  function normalizeData() {
    let normalizedData
    switch (radioValue) {
      case 'x':
        normalizedData = sensor.accelerations.x.map((point) => [point.x, point.y])
        break

      case 'y':
        normalizedData = sensor.accelerations.y.map((point) => [point.x, point.y])
        break

      case 'z':
        normalizedData = sensor.accelerations.z.map((point) => [point.x, point.y])
        break

      default:
        normalizedData = sensor.accelerations.x.map((point) => [point.x, point.y])
    }

    normalizedData.unshift(['time stamp', 'find a proper name'])
    return normalizedData
  }

  function getColor() {
    switch (radioValue) {
      case 'x':
        return 'green'

      case 'y':
        return 'purple'

      case 'z':
        return '#ff8f12'

      default:
        return 'green'
    }
  }

  function renderTabContent() {
    return (
      <>
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
          height="94%"
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
            series: {
              color: getColor(),
            },
          }}
        />
      </>
    )
  }

  function handleTabClick(activeTabKey) {
    setActiveTab(activeTabKey)
  }

  return (
    <div className="graph-container">
      <Tabs onTabClick={handleTabClick}>
        <TabPane tab="Accelerations" key="1">
          {renderTabContent()}
        </TabPane>
        <TabPane tab="Displacements" key="2">
          {renderTabContent()}
        </TabPane>
        <TabPane tab="Velocities" key="3">
          {renderTabContent()}
        </TabPane>


      </Tabs>
    </div>
  )
}
export default GraphContainer


GraphContainer.propTypes = {
  sensor: PropTypes.objectOf(PropTypes.any).isRequired,
}
