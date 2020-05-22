import React, { useEffect, useState } from 'react'
import {
  Empty, Radio, Spin, Tabs,
} from 'antd'
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
    isEmpty && setIsEmpty(false)
    setNormalizeData()
  }, [sensor])

  function handleRadioClick(e) {
    setRadioValue(e.target.value)
    isEmpty && setIsEmpty(false)
  }

  function setNormalizeData() {
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
    isEmpty && setIsEmpty(false)
    setActiveTab(activeTabKey)
  }

  function getData() {
    console.log('activeTab: ', activeTab)
    console.log('TAB_KEY.velocities: ', TAB_KEY.velocities)

    if (accelerationsData && activeTab === TAB_KEY.accelerations) {
      if (radioValue === 'x') {
        if (accelerationsData.x.length <= 3) {
          !isEmpty && setIsEmpty(true)
        }
        return accelerationsData.x
      }
      if (radioValue === 'y') {
        if (accelerationsData.y.length <= 3) {
          !isEmpty && setIsEmpty(true)
        }
        return accelerationsData.y
      }
      if (radioValue === 'z') {
        if (accelerationsData.z.length <= 3) {
          !isEmpty && setIsEmpty(true)
        }
        return accelerationsData.z
      }
    }

    if (displacementsData && activeTab === TAB_KEY.displacements) {
      if (radioValue === 'x') {
        if (displacementsData.x.length <= 3) {
          !isEmpty && setIsEmpty(true)
        }
        return displacementsData.x
      }
      if (radioValue === 'y') {
        if (displacementsData.y.length <= 3) {
          !isEmpty && setIsEmpty(true)
        }
        return displacementsData.y
      }
      if (radioValue === 'z') {
        if (displacementsData.z.length <= 3) {
          !isEmpty && setIsEmpty(true)
        }
        return displacementsData.z
      }
    }

    if (velocitiesData && activeTab === TAB_KEY.velocities) {
      if (radioValue === 'x') {
        if (velocitiesData.x.length <= 3) {
          setIsEmpty(true)
        }
        return velocitiesData.x
      }
      if (radioValue === 'y') {
        if (velocitiesData.x.length <= 3) {
          setIsEmpty(true)
        }
        return velocitiesData.y
      }
      if (radioValue === 'z') {
        if (velocitiesData.x.length <= 3) {
          setIsEmpty(true)
        }
        return velocitiesData.z
      }
    }
  }

  function renderTabContent() {
    return (
      <>
        <div className="container-header">
          { !isEmpty && (
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
          )}
        </div>
        { isEmpty ? (
          <div className="empty-container">
            <Empty className="empty-data" description={<span>No data for this graph at the moment</span>} />
          </div>
        ) : (
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
        )}
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
