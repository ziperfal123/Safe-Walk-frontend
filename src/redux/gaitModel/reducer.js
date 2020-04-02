import {
  FETCH_GAIT_MODEL_BY_TEST_ID_SUCCESS,
  // eslint-disable-next-line no-unused-vars
  FETCH_GAIT_MODEL_BY_TEST_ID_FAILURE,
  FETCH_GAIT_MODEL_BY_TEST_ID_SET_LOADING_TRUE,
  FETCH_GAIT_MODEL_BY_TEST_ID_SET_LOADING_FALSE,
  CLEAN_GAIT_MODEL,
} from './actionTypes'

const initialState = {
  gaitModel: null,
  loadingGaitModel: false,
}

const gaitModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAIT_MODEL_BY_TEST_ID_SUCCESS:
      return {
        ...state,
        gaitModel: action.payload,
      }

    case FETCH_GAIT_MODEL_BY_TEST_ID_SET_LOADING_TRUE:
      return {
        ...state,
        loadingGaitModel: true,
      }

    case FETCH_GAIT_MODEL_BY_TEST_ID_SET_LOADING_FALSE:
      return {
        ...state,
        loadingGaitModel: false,
      }

    case CLEAN_GAIT_MODEL:
      return {
        ...state,
        gaitModel: null,
      }

    default:
      return state
  }
}

export default gaitModelReducer
