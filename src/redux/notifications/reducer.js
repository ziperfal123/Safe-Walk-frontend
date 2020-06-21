import * as ActionTypes from './actionTypes'

const initialState = {
  notifications: [],
}

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.payload,
      }
    case ActionTypes.PUSH_NEW_NOTIFICATION_TO_POOL:
      console.log('action.payload: ', action.payload)
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      }

    default:
      return state
  }
}

export default notificationsReducer
