import { get } from 'utils/fetch'
import * as ActionTypes from './actionTypes'
import {API} from "utils/consts";

// eslint-disable-next-line import/prefer-default-export
export const getAllNotifications = () => async (dispatch) => {
  try {
    const response = await get(`${API.notificationsEndpoint}`)
    dispatch({
      type: ActionTypes.FETCH_ALL_NOTIFICATIONS_SUCCESS,
      payload: response.data,
    })
  } catch (err) {
    console.error('error: ', err)
  }
}

export const pushNotifictionFromSocketToNotificationsPool = (data) => (dispatch) => {
  console.log('data: ', data)
  dispatch({
    type: ActionTypes.PUSH_NEW_NOTIFICATION_TO_POOL,
    payload: data,
  })
}