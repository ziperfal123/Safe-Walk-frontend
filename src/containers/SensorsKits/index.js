import { connect } from 'react-redux'
import SensorKits from './SensorKits'
import {activateErrorModal} from "redux/error/actionCreators";


const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SensorKits)
