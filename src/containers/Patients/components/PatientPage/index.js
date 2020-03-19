import PatientPage from './PatientPage'
import {connect} from "react-redux";
import { getTestsById } from "../../../../redux/tests/actionsCreator";

const mapStateToProps = state => {
    return {
        allTestsById: state.testsReducer.allTestsById
    }
}

const mapDispatchToProps = { getTestsById }

export default connect(mapStateToProps, mapDispatchToProps)(PatientPage)
