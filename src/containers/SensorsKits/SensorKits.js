import React, {useEffect} from 'react'
import './sensorKits.scss'
import KitsTable from './components/KitsTable'


const SensorKits = (props) => {
  const { getAllKits } = props
  console.log('SensorKits')

  useEffect(() => {
    getAllKits()
  }, [])
  return (
    <div className="kits-page">
      <KitsTable
          // allPatients={allPatients}
          // handleTableRowClick={handleTableRowClick}
          // loadingAllPatients={loadingAllPatients}
      />
    </div>
  )
}

export default SensorKits
