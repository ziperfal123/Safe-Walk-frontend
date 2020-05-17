import { get } from 'utils/fetch'
import { API } from 'utils/consts'
import * as ActionTypes from './actionTypes'

// eslint-disable-next-line import/prefer-default-export
export const getAllPatients = () => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_ALL_PATIENTS_SET_LOADING_TRUE })
  try {
    const response = await get(API.patientEndpoint)
    dispatch({
      type: ActionTypes.FETCH_ALL_PATIENTS_SUCCESS,
      payload: response.data,
    })
  } catch (err) {
    dispatch({ type: ActionTypes.FETCH_ALL_PATIENTS_FAILURE })
    console.log('error: ', err)
  }
  dispatch({ type: ActionTypes.FETCH_ALL_PATIENTS_SET_LOADING_FALSE })
}
