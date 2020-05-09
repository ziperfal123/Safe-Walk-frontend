import { connect } from 'react-redux'
import { getTestsById, cleanTestsById } from 'redux/tests/actionsCreator'
import { getRehabPlanById } from  'redux/plans/actionsCreator'
import { getAllDefaultPlans } from 'redux/defaultPlans/actionsCreator'
import PatientPage from './PatientPage'

const mapStateToProps = (state) => ({
  planById: state.plansReducer.planById,
  loadingPlanById: state.plansReducer.loadingPlanById,
  allDefaultPlans: state.defaultPlansReducer.allDefaultPlans,
})

const mapDispatchToProps = {
  getTestsById, cleanTestsById, getRehabPlanById, getAllDefaultPlans
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientPage)
