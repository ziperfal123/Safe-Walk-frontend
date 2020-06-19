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

    default:
      return state
  }
}

export default notificationsReducer
