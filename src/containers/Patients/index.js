import { connect } from 'react-redux'
import { getAllPatients, createPatient } from 'redux/patients/actionsCreator'
import { getTestsById, cleanTestsById } from 'redux/tests/actionsCreator'
import Patients from './Patients'

const mapStateToProps = (state) => ({
  allPatients: state.patientsReducer.allPatients,
  allTestsById: state.testsReducer.allTestsById,
  loadingAllPatients: state.patientsReducer.loadingAllPatients,
  loadingAllTestsById: state.testsReducer.loadingAllTestsById,
  loadingCreatePatient: state.patientsReducer.loadingCreatePatient,
})

const mapDispatchToProps = {
  getAllPatients, getTestsById, cleanTestsById, createPatient,
}

export default connect(mapStateToProps, mapDispatchToProps)(Patients)
