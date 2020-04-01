import {
  FETCH_GAIT_MODEL_BY_TEST_ID_SUCCESS,
  // eslint-disable-next-line no-unused-vars
  FETCH_GAIT_MODEL_BY_TEST_ID_FAILURE,
  FETCH_GAIT_MODEL_BY_TEST_ID_SET_LOADING_TRUE,
  FETCH_GAIT_MODEL_BY_TEST_ID_SET_LOADING_FALSE,
} from './actionTypes'

const initialState = {
  gaitModel: null,
  loadingGaitModel: false,
}

const gaitModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAIT_MODEL_BY_TEST_ID_SUCCESS:
      console.log('what: ')
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

    default:
      return state
  }
}

export default gaitModelReducer
