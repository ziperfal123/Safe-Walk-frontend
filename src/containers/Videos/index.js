import { connect } from 'react-redux'
import { getAllVideos, createVideo } from 'redux/videos/actionsCreator'
import Videos from './Videos'
import {createError} from "redux/error/actionCreators";


const mapStateToProps = (state) => ({
  allVideos: state.videosReducer.allVideos,
  loadingAllVideos: state.videosReducer.loadingAllVideos,
  loadingCreateVideo: state.videosReducer.loadingCreateVideo,
})

const mapDispatchToProps = { getAllVideos, createVideo, createError }

export default connect(mapStateToProps, mapDispatchToProps)(Videos)
