import {connect} from "react-redux";
import PatientTests from './PatientTests'
import { getAllPatients } from "../../redux/patients/actionsCreator";
import {getAllTests} from '../../redux/tests/actionsCreator'

const mapStateToProps = state => {
    return {
        allPatients: state.patientsReducer.allPatients,
        allTests: state.testsReducer.allTests
    }
}

const mapDispatchToProps = { getAllPatients, getAllTests }

export default connect(mapStateToProps, mapDispatchToProps)(PatientTests)