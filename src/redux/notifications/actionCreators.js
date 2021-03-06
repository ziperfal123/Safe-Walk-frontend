import { get } from 'utils/fetch'
import { API } from 'utils/consts'
import { normalizeDate } from 'utils/date'
import * as ActionTypes from './actionTypes'

// eslint-disable-next-line import/prefer-default-export
export const getAllNotifications = () => async (dispatch) => {
  try {
    const { data } = await get(`${API.notificationsEndpoint}`)
    const normalizedData = data.map((notification) => {
      const d = new Date(notification.timeStamp)
      return {
        ...notification,
        localTime: normalizeDate(d),
      }
    })
    dispatch({
      type: ActionTypes.FETCH_ALL_NOTIFICATIONS_SUCCESS,
      payload: normalizedData,
    })
  } catch (err) {
    console.error('error: ', err)
  }
}

export const pushNotificationFromSocketToNotificationPool = (data) => (dispatch) => {
  const d = new Date(data.timeStamp)
  dispatch({
    type: ActionTypes.PUSH_NEW_NOTIFICATION_TO_POOL,
    payload: {
      ...data,
      localTime: normalizeDate(d),
    },
  })
}
