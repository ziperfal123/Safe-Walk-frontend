import { get } from 'utils/fetch'
import * as ActionTypes from './actionTypes'


export const getGaitModelByTestId = (testId) => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_GAIT_MODEL_BY_TEST_ID_SET_LOADING_TRUE })
  try {
    const response = await get(`patientGaitModel/${testId}`)
    dispatch({
      type: ActionTypes.FETCH_GAIT_MODEL_BY_TEST_ID_SUCCESS,
      payload: response.data,
    })
  } catch (err) {
    console.log('err: ', err)
  }
  dispatch({ type: ActionTypes.FETCH_GAIT_MODEL_BY_TEST_ID_SET_LOADING_FALSE })
}

export const cleanGaitModel = () => dispatch => dispatch({type: ActionTypes.CLEAN_GAIT_MODEL})
