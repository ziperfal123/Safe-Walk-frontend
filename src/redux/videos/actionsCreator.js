import { get } from 'utils/fetch'
import {
  FETCH_ALL_VIDEOS_SUCCESS,
  FETCH_ALL_VIDEOS_FAILURE,
  FETCH_ALL_VIDEOS_SET_LOADING_TRUE,
  FETCH_ALL_VIDEOS_SET_LOADING_FALSE,
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
