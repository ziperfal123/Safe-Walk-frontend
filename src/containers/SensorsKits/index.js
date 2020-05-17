import { connect } from 'react-redux'
import SensorKits from './SensorKits'
import { getAllKits } from 'redux/kits/actionCreators'
import { activateErrorModal } from "redux/error/actionCreators";


const mapStateToProps = (state) => ({
  allKits: state.kitsReducer.allKits,
  loadingAllKits: state.kitsReducer.loadingAllKits,
})

const mapDispatchToProps = { getAllKits }

export default connect(mapStateToProps, mapDispatchToProps)(SensorKits)
