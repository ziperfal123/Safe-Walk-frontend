import { connect } from 'react-redux'
import {
  getAllVideos, createVideo, deleteVideo, setLoadingToTrue,
} from 'redux/videos/actionsCreator'
import { activateErrorModal } from 'redux/error/actionCreators'
import Videos from './Videos'


const mapStateToProps = (state) => ({
  allVideos: state.videosReducer.allVideos,
  loadingAllVideos: state.videosReducer.loadingAllVideos,
  loadingCreateVideo: state.videosReducer.loadingCreateVideo,
})

const mapDispatchToProps = {
  getAllVideos, createVideo, activateErrorModal, deleteVideo, setLoadingToTrue,
}

export default connect(mapStateToProps, mapDispatchToProps)(Videos)
