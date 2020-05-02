import { get, post } from 'utils/fetch'
import {
  FETCH_ALL_VIDEOS_SUCCESS,
  FETCH_ALL_VIDEOS_FAILURE,
  FETCH_ALL_VIDEOS_SET_LOADING_TRUE,
  FETCH_ALL_VIDEOS_SET_LOADING_FALSE,
  CREATE_VIDEO,
  CREATE_VIDEO_SET_LOADING_TRUE,
  CREATE_VIDEO_SET_LOADING_FALSE,
} from './actionTypes'

export const getAllVideos = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_VIDEOS_SET_LOADING_TRUE })
  try {
    const response = await get('video')
    dispatch({
      type: FETCH_ALL_VIDEOS_SUCCESS,
      payload: response.data,
    })
  } catch (err) {
    console.log('error: ', err)
  }
  dispatch({ type: FETCH_ALL_VIDEOS_SET_LOADING_FALSE })
}

export const createVideo = (formData) => async (dispatch) => {
  dispatch({ type: CREATE_VIDEO_SET_LOADING_TRUE })
  try {
    const response = await post('video', formData)
    dispatch({
      type: CREATE_VIDEO,
      payload: response.data,
    })
  } catch (err) {
    console.log('error: ', err)
  }
  dispatch({ type: CREATE_VIDEO_SET_LOADING_FALSE })
}
