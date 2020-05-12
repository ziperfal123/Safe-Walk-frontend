import { deepClone } from 'lodash'
import { get, post, del } from 'utils/fetch'
import { API } from 'utils/consts'
import store from '../store'
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
      dispatch({ type: ActionsType.CREATE_VIDEO_SET_LOADING_FALSE })
      dispatch({
        type: ActionsType.CREATE_VIDEO_SUCCESS,
        payload: addedVideoObj,
      })
      return API.postRequestSuccess
    }
  } catch (err) {
    dispatch({ type: ActionsType.CREATE_VIDEO_SET_LOADING_FALSE })
    console.log('err: ', err)
    return err
  }
}

export const deleteVideo = (idToDelte) => async (dispatch) => {
  // const arrOfVideo = deepClone(store.getState().videoReducer.allVideos)
  // console.log('arrOfVideo: ', arrOfVideo)
  // try {
  //   const { data: resData, status: statusCode } = await del(`${API.videoEndpoint}/${idToDelte}`)
  //   if (statusCode >= 200 && statusCode < 300) {
  //     const newArrOfVideos = arrOfVideo.filter(video => video.id !== idToDelte)
  //     console.log('newArrOfVideos: ', newArrOfVideos)
  //     dispatch({
  //       type: ActionsType.DELETE_VIDEO_SUCCESS,
  //       payload: newArrOfVideos,
  //     })
  //     return API.postRequestSuccess
  //   }
  // } catch (e) {
  //   console.log('e')
  // }
}
