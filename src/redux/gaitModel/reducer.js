import * as ActionTypes from './actionTypes'
const initialState = {
  gaitModel: null,
  loadingGaitModel: false,
}

const gaitModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_GAIT_MODEL_BY_TEST_ID_SUCCESS:
      return {
        ...state,
        gaitModel: action.payload,
      }

    case ActionTypes.FETCH_GAIT_MODEL_BY_TEST_ID_SET_LOADING_TRUE:
      return {
        ...state,
        loadingGaitModel: true,
      }

    case ActionTypes.FETCH_GAIT_MODEL_BY_TEST_ID_SET_LOADING_FALSE:
      return {
        ...state,
        loadingGaitModel: false,
      }

    case ActionTypes.CLEAN_GAIT_MODEL:
      return {
        ...state,
        gaitModel: null,
      }

    default:
      return state
  }
}

export default gaitModelReducer
