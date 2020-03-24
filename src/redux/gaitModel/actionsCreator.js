import { get } from 'utils/fetch'
import {
  FETCH_GAIT_MODEL_BY_TEST_ID_SUCCESS,
  FETCH_GAIT_MODEL_BY_TEST_ID_FAILURE,
  FETCH_GAIT_MODEL_BY_TEST_ID_SET_LOADING_TRUE,
  FETCH_GAIT_MODEL_BY_TEST_ID_SET_LOADING_FALSE,
} from './actionTypes'


export const getGaitModelByTestId = (testId) => async (dispatch) => {
  dispatch({ type: FETCH_GAIT_MODEL_BY_TEST_ID_SET_LOADING_TRUE })
  try {
    const response = await get(`patientGaitModel/${testId}`)
    dispatch({
      type: FETCH_GAIT_MODEL_BY_TEST_ID_SUCCESS,
      payload: response.data,
    })
  } catch (err) {
    console.log('err: ', err)
  }
  dispatch({ type: FETCH_GAIT_MODEL_BY_TEST_ID_SET_LOADING_FALSE })
}
