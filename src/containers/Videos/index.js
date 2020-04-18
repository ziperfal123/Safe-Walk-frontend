import { connect } from 'react-redux'
import { getAllVideos } from 'redux/videos/actionsCreator'
import Videos from './Videos'


const mapStateToProps = (state) => ({
  allVideos: state.videosReducer.allVideos,
  loadingAllVideos: state.videosReducer.loadingAllVideos,
})

const mapDispatchToProps = { getAllVideos }

export default connect(mapStateToProps, mapDispatchToProps)(Videos)
