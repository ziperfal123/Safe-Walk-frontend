import { get, post, del } from 'utils/fetch'
import { API } from 'utils/consts'
import * as ActionsType from './actionTypes'


export const getAllVideos = () => async (dispatch) => {
  dispatch({ type: ActionsType.FETCH_ALL_VIDEOS_SET_LOADING_TRUE })
  try {
    const response = await get('video')
    dispatch({
      type: ActionsType.FETCH_ALL_VIDEOS_SUCCESS,
      payload: response.data.reverse(),
    })
  } catch (err) {
    console.log('error: ', err)
  }
  dispatch({ type: ActionsType.FETCH_ALL_VIDEOS_SET_LOADING_FALSE })
}


export const createVideo = (formData) => async (dispatch) => {
  dispatch({ type: ActionsType.CREATE_VIDEO_SET_LOADING_TRUE })
  try {
    const { data: videoData, status: statusCode } = await post(API.videoEndpoint, formData)
    const addedVideoObj = {
      id: videoData.id,
      link: videoData.link,
      name: videoData.name,
    }

    if (statusCode >= 200 && statusCode < 300) {
      dispatch({
        type: ActionsType.CREATE_VIDEO_SUCCESS,
        payload: addedVideoObj,
      })
      dispatch({ type: ActionsType.CREATE_VIDEO_SET_LOADING_FALSE })
      return API.postRequestSuccess
    }
  } catch (err) {
    dispatch({ type: ActionsType.CREATE_VIDEO_SET_LOADING_FALSE })
    console.log('err: ', err)
    return err
  }
}

export const deleteVideo = (idToDelte) => async (dispatch) => {
  try {
    const { data: resData, status: statusCode } = await del(`${API.videoEndpoint}/${idToDelte}`)
    if (statusCode >= 200 && statusCode < 300) {
      dispatch({
        type: ActionsType.DELETE_VIDEO_SUCCESS,
        payload: idToDelte,
      })
      return API.postRequestSuccess
    }
  } catch (e) {
    console.log('e')
  }
}
