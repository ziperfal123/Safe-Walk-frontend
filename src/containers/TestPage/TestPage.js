import React, { useEffect, useState } from 'react'
import {
  Spin, Select, Button, Modal as AntModal, List,
} from 'antd'
import PropTypes from 'prop-types'
import GraphContainer from 'containers/TestPage/components/GraphContainer'
import 'containers/TestPage/testPage.scss'


const TestPage = (props) => {
  const {
    gaitModel,
    loadingGaitModel,
    getGaitModelByTestId,
    testId,
    cleanGaitModel,
  } = props

  const [selectedOption, setSelectedOption] = useState('sensor1')
  const [sensor1, setSensor1] = useState(null)
  const [sensor2, setSensor2] = useState(null)
  const [sensor3, setSensor3] = useState(null)
  const [sensor4, setSensor4] = useState(null)
  const [sensor5, setSensor5] = useState(null)
  const [sensor6, setSensor6] = useState(null)
  const [sensor7, setSensor7] = useState(null)
  const [shouldOpenModal, setShouldOpenModal] = useState(false)
  const [graphDisplayContent, setGraphDisplayContent] = useState({ tab: '1', radio: 'x' })


  useEffect(() => {
    getGaitModelByTestId(testId)
    return () => { cleanGaitModel() }
  }, [])

  useEffect(() => {
    if (gaitModel) {
      Object.keys(gaitModel).map((key) => generateSensorsData(key))
    }
  }, gaitModel)

  function renderSelect() {
    return (
      <Select className="graph-select" defaultValue="Sensor 1- Right Tigh" onChange={handleSelectChange}>
        <Select.Option value="sensor1">Sensor 1- Right Tigh</Select.Option>
        <Select.Option value="sensor2">Sensor 2- Left Tigh</Select.Option>
        <Select.Option value="sensor3">Sensor 3- Right Knee</Select.Option>
        <Select.Option value="sensor4">Sensor 4- Left Knee</Select.Option>
        <Select.Option value="sensor5">Sensor 5- Right Ankle</Select.Option>
        <Select.Option value="sensor6">Sensor 6- Left Ankle</Select.Option>
        <Select.Option value="sensor7">Sensor 7- Center of mass</Select.Option>
      </Select>
    )
  }

  function handleSelectChange(val) {
    setSelectedOption(val)
  }

  function generateSensorsData(key) {
    if (key === 'testID' || key === 'id' || key === '_id' || key === '__v') return null
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
    gaitModel[key].displacements.forEach((dataElement) => {
      displacementsX.push({ x: dataElement.timeStamp, y: dataElement.x })
      displacementsY.push({ x: dataElement.timeStamp, y: dataElement.y })
      displacementsZ.push({ x: dataElement.timeStamp, y: dataElement.z })
    })
    gaitModel[key].velocities.forEach((dataElement) => {
      velocitiesX.push({ x: dataElement.timeStamp, y: dataElement.x })
      velocitiesY.push({ x: dataElement.timeStamp, y: dataElement.y })
      velocitiesZ.push({ x: dataElement.timeStamp, y: dataElement.z })
    })

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
        x: velocitiesX,
        y: velocitiesY,
        z: velocitiesZ,
      },
      report: gaitModel[key].report,
    }
    switch (key) {
      case 'sensor1': {
        setSensor1(tmpObj)
        break
      }
      case 'sensor2': {
        setSensor2(tmpObj)
        break
      }
      case 'sensor3': {
        setSensor3(tmpObj)
        break
      }
      case 'sensor4': {
        setSensor4(tmpObj)
        break
      }
      case 'sensor5': {
        setSensor5(tmpObj)
        break
      }
      case 'sensor6': {
        setSensor6(tmpObj)
        break
      }
      case 'sensor7': {
        setSensor7(tmpObj)
        break
      }
      default: {
        setSensor1(tmpObj)
      }
    }
  }

  function getSensor() {
    switch (selectedOption) {
      case 'sensor1': {
        return sensor1
      }
      case 'sensor2': {
        return sensor2
      }
      case 'sensor3': {
        return sensor3
      }
      case 'sensor4': {
        return sensor4
      }
      case 'sensor5': {
        return sensor5
      }
      case 'sensor6': {
        return sensor6
      }
      case 'sensor7': {
        return sensor7
      }
      default: {
        return sensor1
      }
    }
  }

  function handleOpenReport() {
    setShouldOpenModal(true)
  }

  function handleOnCancelModal() {
    setShouldOpenModal(false)
  }

  function generateReportData() {
    const normalziedReport = [...getSensor().report]
    normalziedReport.shift()
    return normalziedReport
  }

  return (
    <>
      {!gaitModel || loadingGaitModel ? (
        <div className="loading-test">
          <Spin />
          <h3>it might take up to one minute..</h3>
        </div>
      ) : (
        <>
          <AntModal
            className="report-modal"
            width={600}
            visible={shouldOpenModal}
            title="Report Description:"
            onCancel={handleOnCancelModal}
            destroyOnClose
            footer={<Button type="primary" onClick={handleOnCancelModal}>OK</Button>}
          >
            <List
              size="large"
              header={<h4><mark>{getSensor().report[0]}</mark></h4>}
              dataSource={generateReportData()}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </AntModal>
          <div className="graph-page">
            <h1 className="test-title">Gait model data</h1>
            {renderSelect()}
            <Button className="report-btn" type="primary" onClick={handleOpenReport}>Open Report</Button>
            <GraphContainer
              sensor={getSensor()}
              isSensorBelongsToRightTigh={selectedOption === 'sensor1'}
              isSensorBelongsToLeftTigh={selectedOption === 'sensor2'}
              cleanGaitModel={cleanGaitModel}
            />
          </div>
        </>
      )}
    </>
  )
}


export default TestPage


TestPage.propTypes = {
  gaitModel: PropTypes.objectOf(PropTypes.any).isRequired,
  loadingGaitModel: PropTypes.bool.isRequired,
  getGaitModelByTestId: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  cleanGaitModel: PropTypes.func.isRequired,
}
