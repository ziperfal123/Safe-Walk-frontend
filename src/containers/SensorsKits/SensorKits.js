import React, {useEffect} from 'react'
import './sensorKits.scss'
import KitsTable from './components/KitsTable'
import pathsNames from "router/pathNames";


const SensorKits = (props) => {
  const { getAllKits, loadingAllKits, allKits} = props
  console.log('SensorKits')

  useEffect(() => {
    getAllKits()
  }, [])

  return (
    <div className="kits-page">
      <KitsTable
          allKits={allKits}
          loadingAllKits={loadingAllKits}
      />
    </div>
  )
}

export default SensorKits
