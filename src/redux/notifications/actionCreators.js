import { get } from 'utils/fetch'
import * as ActionTypes from './actionTypes'
import {API} from "utils/consts";

// eslint-disable-next-line import/prefer-default-export
export const getAllNotifications = () => async (dispatch) => {
  try {
    const response = await get(`${API.notificationsEndpoint}`)
    console.log('response: ', response)
    dispatch({
      type: ActionTypes.FETCH_ALL_NOTIFICATIONS_SUCCESS,
      payload: response.data,
    })
  } catch (err) {
    console.log('error: ', err)
  }
}