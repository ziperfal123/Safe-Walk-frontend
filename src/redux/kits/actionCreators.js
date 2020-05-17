import { get } from 'utils/fetch'
import * as ActionTypes from './actionTypes'
import {API} from "utils/consts";

// eslint-disable-next-line import/prefer-default-export
export const getAllKits = () => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_ALL_KITS_SET_LOADING_TRUE })
  try {
    const response = await get(API.kitsEndpoint)
    console.log('response: ', response)
    dispatch({
      type: ActionTypes.FETCH_ALL_KITS_SUCCESS,
      payload: response.data,
    })
  } catch (err) {
    dispatch({ type: ActionTypes.FETCH_ALL_KITS_FAILURE })
    console.log('error: ', err)
  }
  dispatch({ type: ActionTypes.FETCH_ALL_KITS_SET_LOADING_FALSE })
}
