import { connect } from 'react-redux'
import { getAllPatients, createPatient } from 'redux/patients/actionsCreator'
import { getTestsById, cleanTestsById } from 'redux/tests/actionsCreator'
import { activateErrorModal } from 'redux/error/actionCreators'

import Patients from './Patients'

const mapStateToProps = (state) => ({
  allPatients: state.patientsReducer.allPatients,
  allTestsById: state.testsReducer.allTestsById,
  loadingAllPatients: state.patientsReducer.loadingAllPatients,
  loadingAllTestsById: state.testsReducer.loadingAllTestsById,
  loadingCreatePatient: state.patientsReducer.loadingCreatePatient,
})

const mapDispatchToProps = {
  getAllPatients, getTestsById, cleanTestsById, createPatient, activateErrorModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Patients)
