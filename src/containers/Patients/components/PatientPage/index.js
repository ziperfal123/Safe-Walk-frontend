import { connect } from 'react-redux'
import { getTestsById, cleanTestsById } from 'redux/tests/actionsCreator'
import { getRehabPlanById } from  'redux/plans/actionsCreator'
import PatientPage from './PatientPage'

const mapStateToProps = (state) => ({
  planById: state.plansReducer.planById,
  loadingPlanById: state.plansReducer.loadingPlanById,
})

const mapDispatchToProps = {
  getTestsById, cleanTestsById, getRehabPlanById,
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientPage)
