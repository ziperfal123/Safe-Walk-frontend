import { MODAL } from 'utils/consts'
import * as ActionTypes from './actionTypes'

const initialState = {
  errorObj: {
    errorOccurred: false,
    errorMessage: MODAL.defaultErrorDescription,
  },
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_ERROR_OBJ:
      return {
        ...state,
        errorObj: {
          errorOccurred: true,
          errorMessage: action.payload.errorMessage,
        },
      }

    case ActionTypes.CLEAN_ERROR_OBJ:
      return {
        ...state,
        errorObj: {
          errorOccurred: false,
          errorMessage: MODAL.defaultErrorDescription,
        },
      }

    default:
      return state
  }
}

export default errorReducer
