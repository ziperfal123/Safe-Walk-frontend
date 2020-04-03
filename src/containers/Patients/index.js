import { connect } from 'react-redux'
import { getAllPatients } from 'redux/patients/actionsCreator'
import { getTestsById, cleanTestsById } from 'redux/tests/actionsCreator'
import Patients from './Patients'

const mapStateToProps = (state) => ({
  allPatients: state.patientsReducer.allPatients,
  loadingAllPatients: state.patientsReducer.loadingAllPatients,
  allTestsById: state.testsReducer.allTestsById,
  loadingAllTestsById: state.testsReducer.loadingAllTestsById,
})

const mapDispatchToProps = { getAllPatients, getTestsById, cleanTestsById }

export default connect(mapStateToProps, mapDispatchToProps)(Patients)
