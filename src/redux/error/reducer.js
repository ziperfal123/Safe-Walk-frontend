import * as ActionTypes from './actionTypes'
const initialState = {
  errorObj: {
    errorOccurred: false,
    errorMessage: '',
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
      console.log('cleaning up')
      return {
        ...state,
        errorObj: {
          errorOccurred: false,
          errorMessage: '',
        },
      }

    default:
      return state
  }
}

export default errorReducer
