import React, { useEffect, useState } from 'react'
import {
  Empty, Radio, Spin, Tabs, Button, Switch,
} from 'antd'
import PropTypes from 'prop-types'
import Chart from 'react-google-charts'
import { GRAPH } from 'utils/consts'
import 'containers/TestPage/testPage.scss'

const { TabPane } = Tabs

const GraphContainer = (props) => {
  const {
    sensor: sensorData,
    isSensorBelongsToLeftTigh,
  } = props

  const [radioValue, setRadioValue] = useState(GRAPH.radioValue.x)
  const [activeTab, setActiveTab] = useState(GRAPH.tabKey.accelerations)
  const [isEmpty, setIsEmpty] = useState(false)
  const [accelerationsData, setAccelerationsData] = useState(null)
  const [displacementsData, setDisplacementsData] = useState(null)
  const [velocitiesData, setVelocitiesData] = useState(null)
  const [shouldDisplayValidData, setShouldDisplayValidData] = useState(true)


  useEffect(() => {
    isEmpty && setIsEmpty(false)
    setNormalizeData()
  }, [sensorData, shouldDisplayValidData])

  function handleRadioClick(e) {
    setRadioValue(e.target.value)
    isEmpty && setIsEmpty(false)
  }

  function setNormalizeData() {
    const accelerationsObj = {
      x: ['dogs', 'patients points'],
      y: ['dogs', 'patients points'],
      z: ['dogs', 'patients points'],
    }
    const displacementsObj = {
      x: ['dogs', 'patients points'],
      y: ['dogs', 'patients points'],
      z: ['dogs', 'patients points'],
    }
    const velocitiesObj = {
      x: ['dogs', 'patients points'],
      y: ['dogs', 'patients points'],
      z: ['dogs', 'patients points'],
    }

    accelerationsObj.x = isSensorBelongsToLeftTigh && shouldDisplayValidData ? (
      [
        [...accelerationsObj.x, 'valid example'],
        ...sensorData.accelerations.x.map((point, index) => (
          [point.x, point.y, GRAPH.validLeftTigh[index]]
        )),
      ]
    ) : ([
      accelerationsObj.x,
      ...sensorData.accelerations.x.map((point) => [point.x, point.y]),
    ])

    console.log('accelerationsObj.x: ', accelerationsObj.x)

    accelerationsObj.y = [
      accelerationsObj.y,
      ...sensorData.accelerations.y.map((point) => [point.x, point.y]),
    ]
    accelerationsObj.z = [
      accelerationsObj.z,
      ...sensorData.accelerations.z.map((point) => [point.x, point.y]),
    ]

    displacementsObj.x = [
      displacementsObj.x,
      ...sensorData.displacements.x.map((point) => [point.x, point.y]),
    ]
    displacementsObj.y = [
      displacementsObj.y,
      ...sensorData.displacements.y.map((point) => [point.x, point.y]),
    ]
    displacementsObj.z = [
      displacementsObj.z,
      ...sensorData.displacements.z.map((point) => [point.x, point.y]),
    ]

    velocitiesObj.x = [
      velocitiesObj.x,
      ...sensorData.velocities.x.map((point) => [point.x, point.y]),
    ]
    velocitiesObj.y = [
      velocitiesObj.y,
      ...sensorData.velocities.y.map((point) => [point.x, point.y]),
    ]
    velocitiesObj.z = [
      velocitiesObj.z,
      ...sensorData.velocities.z.map((point) => [point.x, point.y]),
    ]

    setAccelerationsData(accelerationsObj)
    setDisplacementsData(displacementsObj)
    setVelocitiesData(velocitiesObj)
  }


  function handleTabClick(activeTabKey) {
    isEmpty && setIsEmpty(false)
    setActiveTab(activeTabKey)
  }

  function getData() {
    if (accelerationsData && activeTab === GRAPH.tabKey.accelerations) {
      if (radioValue === GRAPH.radioValue.x) {
        if (accelerationsData.x.length <= 3) {
          !isEmpty && setIsEmpty(true)
        }
        return accelerationsData.x
      }
      if (radioValue === GRAPH.radioValue.y) {
        if (accelerationsData.y.length <= 3) {
          !isEmpty && setIsEmpty(true)
        }
        return accelerationsData.y
      }
      if (radioValue === GRAPH.radioValue.z) {
        if (accelerationsData.z.length <= 3) {
          !isEmpty && setIsEmpty(true)
        }
        return accelerationsData.z
      }
    }

    if (displacementsData && activeTab === GRAPH.tabKey.displacements) {
      if (radioValue === GRAPH.radioValue.x) {
        if (displacementsData.x.length <= 3) {
          !isEmpty && setIsEmpty(true)
        }
        return displacementsData.x
      }
      if (radioValue === GRAPH.radioValue.y) {
        if (displacementsData.y.length <= 3) {
          !isEmpty && setIsEmpty(true)
        }
        return displacementsData.y
      }
      if (radioValue === GRAPH.radioValue.z) {
        if (displacementsData.z.length <= 3) {
          !isEmpty && setIsEmpty(true)
        }
        return displacementsData.z
      }
    }

    if (velocitiesData && activeTab === GRAPH.tabKey.velocities) {
      if (radioValue === GRAPH.radioValue.x) {
        if (velocitiesData.x.length <= 3) {
          setIsEmpty(true)
        }
        return velocitiesData.x
      }
      if (radioValue === GRAPH.radioValue.y) {
        if (velocitiesData.x.length <= 3) {
          setIsEmpty(true)
        }
        return velocitiesData.y
      }
      if (radioValue === GRAPH.radioValue.z) {
        if (velocitiesData.x.length <= 3) {
          setIsEmpty(true)
        }
        return velocitiesData.z
      }
    }
    return null
  }

  function handleHideValidResults(switchMode) {
    setShouldDisplayValidData(switchMode)
  }

  function renderTabContent() {
    const shouldDisplayBtn = isSensorBelongsToLeftTigh
        && radioValue === GRAPH.radioValue.x
        && activeTab === GRAPH.tabKey.accelerations
    return (
      <>
        <div className="container-header">
          { !isEmpty && (
          <>
            {/* {shouldDisplayBtn && <Button className="hide-btn" onClick={handleHideValidResults}>Hide valid results</Button>} */}
            {shouldDisplayBtn && (
            <div className={'hide-btn'}>
              <label>Display valid data: </label>
              <Switch className={"switch"} defaultChecked={shouldDisplayValidData} onClick={handleHideValidResults} />
            </div>
            )}
            <Radio.Group className="radio-container" onChange={handleRadioClick}>
              <Radio
                value="x"
                checked={radioValue === GRAPH.radioValue.x}
              >
                <span>Show X</span>
              </Radio>
              <Radio
                value="y"
                checked={radioValue === GRAPH.radioValue.y}
              >
                Show Y
              </Radio>
              <Radio
                value="z"
                checked={radioValue === GRAPH.radioValue.z}
              >
                Show Z
              </Radio>
            </Radio.Group>
          </>
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
                title: 'Time stamps',
              },
              vAxis: {
                title: 'find the right string here',
              },
              series: {
                1: { curveType: 'function' },
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
        <TabPane tab="Accelerations" key={GRAPH.tabKey.accelerations}>
          {renderTabContent()}
        </TabPane>
        <TabPane tab="Displacements" key={GRAPH.tabKey.displacements}>
          {renderTabContent()}
        </TabPane>
        <TabPane tab="Velocities" key={GRAPH.tabKey.velocities}>
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
