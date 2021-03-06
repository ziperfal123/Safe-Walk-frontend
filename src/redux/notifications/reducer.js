import * as ActionTypes from './actionTypes'

const initialState = {
  notifications: [],
}

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.payload.reverse(),
      }
    case ActionTypes.PUSH_NEW_NOTIFICATION_TO_POOL:
      return {
        ...state,
        notifications: [action.payload, ...state.notifications],
      }

    default:
      return state
  }
}

export default notificationsReducer
