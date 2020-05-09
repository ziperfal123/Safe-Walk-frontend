import { connect } from 'react-redux'
import { getTestsById, cleanTestsById } from 'redux/tests/actionsCreator'
import { getRehabPlanById } from  'redux/plans/actionsCreator'
import { getAllDefaultPlans } from 'redux/defaultPlans/actionsCreator'
import { getAllVideos } from "redux/videos/actionsCreator";
import PatientPage from './PatientPage'

const mapStateToProps = (state) => ({
  planById: state.plansReducer.planById,
  loadingPlanById: state.plansReducer.loadingPlanById,
  allDefaultPlans: state.defaultPlansReducer.allDefaultPlans,
  allVideos: state.videosReducer.allVideos,
})

const mapDispatchToProps = {
  getTestsById, cleanTestsById, getRehabPlanById, getAllDefaultPlans, getAllVideos,
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientPage)
