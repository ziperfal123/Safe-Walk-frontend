import PatientPage from './PatientPage'
import {connect} from "react-redux";
import { getTestsById, cleanTestsById } from "../../../../redux/tests/actionsCreator";

const mapStateToProps = state => {
    return {
        allTestsById: state.testsReducer.allTestsById
    }
}

const mapDispatchToProps = { getTestsById, cleanTestsById }

export default connect(mapStateToProps, mapDispatchToProps)(PatientPage)
