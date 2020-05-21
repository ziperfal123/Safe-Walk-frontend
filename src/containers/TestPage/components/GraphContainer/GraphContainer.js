import React, { useEffect, useState } from 'react'
import { Radio, Spin, Tabs } from 'antd'
import { cloneDeep } from 'lodash'
import PropTypes from 'prop-types'
import Chart from 'react-google-charts'
import 'containers/TestPage/testPage.scss'

const { TabPane } = Tabs

const TAB_KEY = {
  accelerations: '1',
  displacements: '2',
  velocities: '3',
}


const GraphContainer = (props) => {
  const { sensor } = props

  const [radioValue, setRadioValue] = useState('x')
  const [activeTab, setActiveTab] = useState('1')
  const [isEmpty, setIsEmpty] = useState(false)
  const [dataToDisplay, setDataToDisplay] = useState(null)
  const [accelerationsData, setAccelerationsData] = useState(null)
  const [displacementsData, setDisplacementsData] = useState(null)
  const [velocitiesData, setVelocitiesData] = useState(null)

  useEffect(() => {
    getNormalizeData()
  }, [])

  function handleRadioClick(e) {
    setRadioValue(e.target.value)
  }

  function getNormalizeData() {
    const accelerationsObj = {
      x: ['dogs', 'cats'],
      y: ['dogs', 'cats'],
      z: ['dogs', 'cats'],
    }
    const displacementsObj = {
      x: ['dogs', 'cats'],
      y: ['dogs', 'cats'],
      z: ['dogs', 'cats'],

    }
    const velocitiesObj = {
      x: ['dogs', 'cats'],
      y: ['dogs', 'cats'],
      z: ['dogs', 'cats'],
    }

    accelerationsObj.x = [
      accelerationsObj.x,
      ...sensor.accelerations.x.map((point) => [point.x, point.y]),
    ]
    accelerationsObj.y = [
      accelerationsObj.y,
      ...sensor.accelerations.y.map((point) => [point.x, point.y]),
    ]
    accelerationsObj.z = [
      accelerationsObj.z,
      ...sensor.accelerations.z.map((point) => [point.x, point.y]),
    ]

    displacementsObj.x = [
      displacementsObj.x,
      ...sensor.displacements.x.map((point) => [point.x, point.y]),
    ]
    displacementsObj.y = [
      displacementsObj.y,
      ...sensor.displacements.y.map((point) => [point.x, point.y]),
    ]
    displacementsObj.z = [
      displacementsObj.z,
      ...sensor.displacements.z.map((point) => [point.x, point.y]),
    ]

    velocitiesObj.x = [
      velocitiesObj.x,
      ...sensor.velocities.x.map((point) => [point.x, point.y]),
    ]
    velocitiesObj.y = [
      velocitiesObj.y,
      ...sensor.velocities.y.map((point) => [point.x, point.y]),
    ]
    velocitiesObj.z = [
      velocitiesObj.z,
      ...sensor.velocities.z.map((point) => [point.x, point.y]),
    ]

    setAccelerationsData(accelerationsObj)
    setDisplacementsData(displacementsObj)
    setVelocitiesData(velocitiesObj)
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

  function handleTabClick(activeTabKey) {
    // setIsEmpty(false)
    setActiveTab(activeTabKey)
  }

  function getData() {
    if (accelerationsData && activeTab === TAB_KEY.accelerations) {
      if (radioValue === 'x') {
        return accelerationsData.x
      }
      if (radioValue === 'y') {
        return accelerationsData.y
      }
      if (radioValue === 'z') {
        return accelerationsData.z
      }
    }
    console.log('displacementsData: ', displacementsData)
    console.log(' activeTab: ', activeTab)
    console.log('TAB_KEY.displacements: ', TAB_KEY.displacements)
    if (displacementsData && activeTab === TAB_KEY.displacements) {
      console.log('inside')
      console.log('displacementsData', displacementsData)
      if (radioValue === 'x') {
        return displacementsData.x
      }
      if (radioValue === 'y') {
        return displacementsData.y
      }
      if (radioValue === 'z') {
        return displacementsData.z
      }
    }

    if (velocitiesData && activeTab === TAB_KEY.velocities) {
      if (radioValue === 'x') {
        return velocitiesData.x
      }
      if (radioValue === 'y') {
        return velocitiesData.y
      }
      if (radioValue === 'z') {
        return velocitiesData.z
      }
    }
    return [['dog', 'cat'], [0, 0]]
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
          data={getData()}
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


  return (
    <div className="graph-container">
      <Tabs onTabClick={handleTabClick}>
        <TabPane tab="Accelerations" key={TAB_KEY.accelerations}>
          {renderTabContent()}
        </TabPane>
        <TabPane tab="Displacements" key={TAB_KEY.displacements}>
          {renderTabContent()}
        </TabPane>
        <TabPane tab="Velocities" key={TAB_KEY.velocities}>
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
