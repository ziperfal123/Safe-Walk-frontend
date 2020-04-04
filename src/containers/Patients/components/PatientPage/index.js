import { connect } from 'react-redux'
import { getTestsById, cleanTestsById } from 'redux/tests/actionsCreator'
import PatientPage from './PatientPage'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  getTestsById, cleanTestsById,
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientPage)
