import {connect} from "react-redux";
import PatientTests from './PatientTests'
import { getAllPatients, getAllTests } from "./redux/actionsCreator";

const mapStateToProps = state => {
    return {
        allPatients: state.patientsTestsReducer.allPatients,
        allTests: state.patientsTestsReducer.allTests
    }
}

const mapDispatchToProps = { getAllPatients, getAllTests }

export default connect(mapStateToProps, mapDispatchToProps)(PatientTests)