import { AUTH } from 'utils/consts'
import * as ActionType from './actionTypes'

const initialState = {
  userName: localStorage.getItem('userName') || '',
  userImage: localStorage.getItem('userImage') || '',
  therapistId: localStorage.getItem('therapistId') || '',
  isUserAuthenticated: AUTH.isPending,
  loading: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHECK_USER_AUTH_STATUS_ON_APP_LOAD:
      return {
        ...state,
        isUserAuthenticated: action.payload,
      }
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isUserAuthenticated: AUTH.isAuthenticated,
        userName: action.payload.name,
        userImage: action.payload.img,
        therapisttherapistIdId: action.payload.id,
      }

    case ActionType.SET_LOADING_TO_TRUE:
      return {
        ...state,
        loading: true,
      }

    case ActionType.SET_LOADING_TO_FALSE:
      return {
        ...state,
        loading: false,
      }
    case ActionType.LOGOUT: {
      return {
        ...state,
        isUserAuthenticated: AUTH.isNotAuthenticated,
      }
    }

    default:
      return state
  }
}

export default authReducer
