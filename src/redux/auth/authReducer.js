import {
  LOGIN_SUCCESS,
  CHECK_USER_AUTH_STATUS_ON_APP_LOAD,
  SET_LOADING_TO_TRUE,
  SET_LOADING_TO_FALSE,
  LOGOUT,
} from './actionTypes'

const initialState = {
  userName: '',
  userImage: '',
  isUserAuthenticated: null,
  loading: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USER_AUTH_STATUS_ON_APP_LOAD:
      return {
        ...state,
        isUserAuthenticated: action.payload,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isUserAuthenticated: true,
        userName: action.payload.name,
        userImage: action.payload.img,
      }

    case SET_LOADING_TO_TRUE:
      return {
        ...state,
        loading: true,
      }

    case SET_LOADING_TO_FALSE:
      return {
        ...state,
        loading: false,
      }
    case LOGOUT: {
      return {
        ...state,
        isUserAuthenticated: false,
      }
    }

    default:
      return state
  }
}

export default authReducer
