import React, { useEffect, useState } from 'react'
import { Spin, Select, Button } from 'antd'
import PropTypes from 'prop-types'

import GraphContainer from 'containers/TestPage/components/GraphContainer'

import 'containers/TestPage/testPage.scss'
import BackButton from 'components/BackButton'


const TestPage = (props) => {
  console.log('TestPage')
  const {
    gaitModel,
    loadingGaitModel,
    getGaitModelByTestId,
    testId,
    cleanGaitModel,
    handleBackClick,
  } = props


  const [selectValue, setSelectValue] = useState('sensor1')
  const [sensor1, setSensor1] = useState(null)
  const [sensor2, setSensor2] = useState(null)
  const [sensor3, setSensor3] = useState(null)
  const [sensor4, setSensor4] = useState(null)
  const [sensor5, setSensor5] = useState(null)
  const [sensor6, setSensor6] = useState(null)
  const [sensor7, setSensor7] = useState(null)


  useEffect(() => {
    getGaitModelByTestId(testId)
    return () => { cleanGaitModel() }
  }, [])

  useEffect(() => {
    if (gaitModel) {
      console.log('gait modal effect')
      console.log('gaitModel[selectValue]: ', gaitModel[`${selectValue}`])
      Object.keys(gaitModel).map((key) => generateSensorsData(key))
    }
  }, gaitModel)

  function renderSelect() {
    return (
      <Select className="graph-select" defaultValue="sensor 1" onChange={handleSelectChange}>
        <Select.Option value="sensor 1">Sensor 1- Right Ankle</Select.Option>
        <Select.Option value="sensor 2">Sensor 2- Left Ankle</Select.Option>
        <Select.Option value="sensor 3">Sensor 3- Right Knee</Select.Option>
        <Select.Option value="sensor 4">Sensor 4- Left Knee</Select.Option>
        <Select.Option value="sensor 5">Sensor 5- Right Right</Select.Option>
        <Select.Option value="sensor 6">Sensor 6- Left Left</Select.Option>
        <Select.Option value="sensor 7">Sensor 7- Center of mass</Select.Option>
      </Select>
    )
  }

  function handleSelectChange(val) {
    setSelectValue(val)
  }

  function generateSensorsData(key) {
    console.log('key: ', key)
    if (key === 'testID' || key === 'id' || key === '_id' || key === '__v') return null
    console.log('key')
    const accelerationX = []
    const accelerationY = []
    const accelerationZ = []

    const displacementsX = []
    const displacementsY = []
    const displacementsZ = []

    const velocitiesX = []
    const velocitiesY = []
    const velocitiesZ = []

    gaitModel[key].accelerations.forEach((dataElement) => {
      accelerationX.push({ x: dataElement.timeStamp, y: dataElement.x })
      accelerationY.push({ x: dataElement.timeStamp, y: dataElement.y })
      accelerationZ.push({ x: dataElement.timeStamp, y: dataElement.z })
    })
    gaitModel[key].accelerations.forEach((dataElement) => {
      displacementsX.push({ x: dataElement.timeStamp, y: dataElement.x })
      displacementsY.push({ x: dataElement.timeStamp, y: dataElement.y })
      displacementsZ.push({ x: dataElement.timeStamp, y: dataElement.z })
    })
    gaitModel[key].accelerations.forEach((dataElement) => {
      velocitiesX.push({ x: dataElement.timeStamp, y: dataElement.x })
      velocitiesY.push({ x: dataElement.timeStamp, y: dataElement.y })
      velocitiesZ.push({ x: dataElement.timeStamp, y: dataElement.z })
    })

    console.log('accelerationX: ', accelerationX)
    console.log('displacementsX: ', displacementsX)
    console.log('velocitiesX: ', velocitiesX)

    const tmpObj = {
      accelerations: {
        x: accelerationX,
        y: accelerationY,
        z: accelerationZ,
      },
      displacements: {
        x: displacementsX,
        y: displacementsY,
        z: displacementsZ,

      },
      velocities: {
        x: accelerationX,
        y: accelerationY,
        z: accelerationZ,
      },
    }
    setSensor1()

    switch (key) {
      case 'sensor1': {
        setSensor1(tmpObj)
      }
      case 'sensor2': {
        setSensor2(tmpObj)
      }
      case 'sensor3': {
        setSensor3(tmpObj)
      }
      case 'sensor4': {
        setSensor4(tmpObj)
      }
      case 'sensor5': {
        setSensor5(tmpObj)
      }
      case 'sensor6': {
        setSensor6(tmpObj)
      }
      case 'sensor7': {
        setSensor7(tmpObj)
      }
      default: {
        console.log(" why am i inside default?")
      }
    }

    // return (
    //   <GraphContainer
    //     key={key}
    //     dataSetX={dataSetX}
    //     dataSetY={dataSetY}
    //     dataSetZ={dataSetZ}
    //     sensor={key}
    //     cleanGaitModel={cleanGaitModel}
    //   />
    // )
  }

  return (
    <>
      {!gaitModel || loadingGaitModel ? (
        <div className="loading-test">
          <Spin />
          <h3>it might take up to one minute..</h3>
        </div>
      ) : (
        <div className="graph-page">
          <BackButton className="back-btn-graph" handleBackClick={handleBackClick} />
          <h1 className="test-title">Gait model data</h1>
          {renderSelect()}
          <Button className="report-btn" type="primary">Open Report</Button>
          {/* { Object.keys(gaitModel).map((key) => generateSensorsData(key)) } */}
        </div>
      )}
    </>
  )
}


export default TestPage


TestPage.propTypes = {
  handleBackClick: PropTypes.func.isRequired,
  gaitModel: PropTypes.objectOf(PropTypes.any).isRequired,
  loadingGaitModel: PropTypes.bool.isRequired,
  getGaitModelByTestId: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  cleanGaitModel: PropTypes.func.isRequired,
}
