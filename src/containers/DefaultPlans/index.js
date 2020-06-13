import { connect } from 'react-redux'
import DefaultPlans from 'containers/DefaultPlans/DefaultPlans'
import {
  getAllDefaultPlans, createDefaultPlan, deleteDefaultPlan, setLoadingToTrue,
} from 'redux/defaultPlans/actionsCreator'
import { getAllVideos } from 'redux/videos/actionsCreator'
import { activateErrorModal } from 'redux/error/actionCreators'


const mapStateToProps = (state) => ({
  allDefaultPlans: state.defaultPlansReducer.allDefaultPlans,
  allVideos: state.videosReducer.allVideos,
  loadingAllDefaultPlans: state.defaultPlansReducer.loadingAllDefaultPlans,
  loadingCreateDefaultPlan: state.defaultPlansReducer.loadingCreateDefaultPlan,
})

const mapDispatchToProps = {
  getAllDefaultPlans, getAllVideos, createDefaultPlan, deleteDefaultPlan, activateErrorModal, setLoadingToTrue,
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPlans)
