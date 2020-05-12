import * as ActionTypes from './actionTypes'
const initialState = {
  allVideos: [],
  loadingAllVideos: true,
  loadingCreateVideo: false,
}

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_VIDEOS_SUCCESS:
      return {
        ...state,
        allVideos: action.payload,
      }

    case ActionTypes.FETCH_ALL_VIDEOS_SET_LOADING_TRUE:
      return {
        ...state,
        loadingAllVideos: true,
      }

    case ActionTypes.FETCH_ALL_VIDEOS_SET_LOADING_FALSE:
      return {
        ...state,
        loadingAllVideos: false,
      }

    case ActionTypes.CREATE_VIDEO_SUCCESS:
      return {
        ...state,
        allVideos: [action.payload, ...state.allVideos],
      }

    case ActionTypes.CREATE_VIDEO_SET_LOADING_TRUE:
      return {
        ...state,
        loadingCreateVideo: true,
      }

    case ActionTypes.CREATE_VIDEO_SET_LOADING_FALSE:
      return {
        ...state,
        loadingCreateVideo: false,
      }

    case ActionTypes.DELETE_VIDEO_SUCCESS:
      return {
        ...state,
        allVideos: action.payload,
      }


    default:
      return state
  }
}

export default videosReducer
