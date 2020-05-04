import {
  FETCH_ALL_VIDEOS_SUCCESS,
  FETCH_ALL_VIDEOS_FAILURE,
  FETCH_ALL_VIDEOS_SET_LOADING_TRUE,
  FETCH_ALL_VIDEOS_SET_LOADING_FALSE,
  CREATE_VIDEO,
  CREATE_VIDEO_SET_LOADING_TRUE,
  CREATE_VIDEO_SET_LOADING_FALSE,
} from './actionTypes'

const initialState = {
  allVideos: [],
  loadingAllVideos: true,
  loadingCreateVideo: false,
}

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_VIDEOS_SUCCESS:
      return {
        ...state,
        allVideos: action.payload,
      }

    case FETCH_ALL_VIDEOS_SET_LOADING_TRUE:
      return {
        ...state,
        loadingAllVideos: true,
      }

    case FETCH_ALL_VIDEOS_SET_LOADING_FALSE:
      console.log('state.allVideos: ', state.allVideos)
      return {
        ...state,
        loadingAllVideos: false,
      }

    case CREATE_VIDEO_SET_LOADING_TRUE:
      return {
        ...state,
        loadingCreateVideo: true,
      }

    case CREATE_VIDEO_SET_LOADING_FALSE:
      return {
        ...state,
        loadingCreateVideo: false,
      }

    default:
      return state
  }
}

export default videosReducer
