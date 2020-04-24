import {
  FETCH_ALL_VIDEOS_SUCCESS,
  FETCH_ALL_VIDEOS_FAILURE,
  FETCH_ALL_VIDEOS_SET_LOADING_TRUE,
  FETCH_ALL_VIDEOS_SET_LOADING_FALSE,
} from './actionTypes'

const initialState = {
  allVideos: [],
  loadingAllVideos: true,
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
      return {
        ...state,
        loadingAllVideos: false,
      }

    default:
      return state
  }
}

export default videosReducer
