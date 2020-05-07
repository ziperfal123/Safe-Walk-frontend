import * as ActionTypes from './actionTypes'


export const createError = (errorMessage) => (dispatch) => {
  dispatch({
    type: ActionTypes.CREATE_ERROR_OBJ,
    payload: {
      errorMessage: errorMessage || 'some message..',
    },
  })
}

export const cleanError = () => (dispatch) => {
  dispatch({
    type: ActionTypes.CLEAN_ERROR_OBJ,
  })
}
