import { connect } from 'react-redux'
import DefaultPlans from "containers/DefaultPlans/DefaultPlans";
import {getAllDefaultPlans} from "redux/defaultPlans/actionsCreator";
import {getAllVideos} from "redux/videos/actionsCreator";


const mapStateToProps = (state) => ({
  allDefaultPlans: state.defaultPlansReducer.allDefaultPlans,
  allVideos: state.videosReducer.allVideos,
  loadingAllDefaultPlans: state.defaultPlansReducer.loadingAllDefaultPlans,
})

const mapDispatchToProps = { getAllDefaultPlans, getAllVideos }

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPlans)
