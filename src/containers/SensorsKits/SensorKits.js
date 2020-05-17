import React from 'react'
import './sensorKits.scss'
import KitsTable from './components/KitsTable'


const SensorKits = (props) => {
  const {} = props
  console.log('SensorKits')

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
