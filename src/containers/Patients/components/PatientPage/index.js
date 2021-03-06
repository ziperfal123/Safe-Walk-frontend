import { connect } from 'react-redux'
import { getTestsByPatientId, cleanTestsById } from 'redux/tests/actionsCreator'
import { getRehabPlanById, editPlan, createPlan } from  'redux/plans/actionsCreator'
import { getAllDefaultPlans } from 'redux/defaultPlans/actionsCreator'
import { getAllVideos } from "redux/videos/actionsCreator";
import {activateErrorModal} from "redux/error/actionCreators"
import PatientPage from './PatientPage'

const mapStateToProps = (state) => ({
  planById: state.plansReducer.planById,
  loadingPlanById: state.plansReducer.loadingPlanById,
  loadingEditPlan: state.plansReducer.loadingEditPlan,
  allDefaultPlans: state.defaultPlansReducer.allDefaultPlans,
  allVideos: state.videosReducer.allVideos,
  therapistId: state.authReducer.therapistId
})

const mapDispatchToProps = {
  getTestsByPatientId,
  cleanTestsById,
  getRehabPlanById,
  getAllDefaultPlans,
  getAllVideos,
  editPlan,
  createPlan,
  activateErrorModal
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientPage)
