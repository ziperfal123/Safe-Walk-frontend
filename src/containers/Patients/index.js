import {connect} from "react-redux";
import Patients from './Patients'
import { getAllPatients } from "../../redux/patients/actionsCreator";
// import {getAllTests} from '../../redux/tests/actionsCreator'

const mapStateToProps = state => {
    return {
        allPatients: state.patientsReducer.allPatients,
    }
}

const mapDispatchToProps = { getAllPatients }

export default connect(mapStateToProps, mapDispatchToProps)(Patients)