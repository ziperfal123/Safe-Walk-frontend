import { get, post } from 'utils/fetch'
import * as ActionsType from './actionTypes'
import { API } from 'utils/consts'


export const getAllVideos = () => async (dispatch) => {
  dispatch({ type: ActionsType.FETCH_ALL_VIDEOS_SET_LOADING_TRUE })
  try {
    const response = await get('video')
    dispatch({
      type: ActionsType.FETCH_ALL_VIDEOS_SUCCESS,
      payload: response.data,
    })
  } catch (err) {
    console.log('error: ', err)
  }
  dispatch({ type: ActionsType.FETCH_ALL_VIDEOS_SET_LOADING_FALSE })
}


export const createVideo = (formData) => async (dispatch) => {
  dispatch({ type: ActionsType.CREATE_VIDEO_SET_LOADING_TRUE })
  try {
    const response = await post('video', formData)
    console.log('response: ', response)

    if (response.status >= 200 && response.status < 300) {
      dispatch({ type: ActionsType.CREATE_VIDEO_SET_LOADING_FALSE })
      dispatch({ type: ActionsType.CREATE_VIDEO_SUCCESS })
      return API.postRequestSuccess
    }
  } catch (err) {
    dispatch({ type: ActionsType.CREATE_VIDEO_SET_LOADING_FALSE })
    console.log('err: ', err)
    return err
  }
}
