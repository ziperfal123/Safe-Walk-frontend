import {connect} from "react-redux";
import Patients from './Patients'
import { getAllPatients } from "../../redux/patients/actionsCreator";
import { getTestsById, cleanTestsById } from '../../redux/tests/actionsCreator'

const mapStateToProps = state => {
    return {
        allPatients: state.patientsReducer.allPatients,
        allTestsById: state.testsReducer.allTestsById
    }
}

const mapDispatchToProps = { getAllPatients, getTestsById, cleanTestsById }

export default connect(mapStateToProps, mapDispatchToProps)(Patients)