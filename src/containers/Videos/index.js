import { connect } from 'react-redux'
import { getAllVideos, createVideo, deleteVideo } from 'redux/videos/actionsCreator'
import Videos from './Videos'
import {activateErrorModal} from "redux/error/actionCreators";


const mapStateToProps = (state) => ({
  allVideos: state.videosReducer.allVideos,
  loadingAllVideos: state.videosReducer.loadingAllVideos,
  loadingCreateVideo: state.videosReducer.loadingCreateVideo,
})

const mapDispatchToProps = { getAllVideos, createVideo, activateErrorModal, deleteVideo }

export default connect(mapStateToProps, mapDispatchToProps)(Videos)
