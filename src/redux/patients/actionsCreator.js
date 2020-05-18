import * as ActionTypes from "./actionTypes";
import {get, post} from 'utils/fetch';
import {API} from "utils/consts";

// eslint-disable-next-line import/prefer-default-export
export const getAllPatients = () => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_ALL_PATIENTS_SET_LOADING_TRUE });
  try {
    const response = await get('patient');
    dispatch({
      type: ActionTypes.FETCH_ALL_PATIENTS_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({ type: ActionTypes.FETCH_ALL_PATIENTS_FAILURE });
    console.log('error: ', err);
  }
  dispatch({ type: ActionTypes.FETCH_ALL_PATIENTS_SET_LOADING_FALSE });
}

export const createPatient = (formData) => async (dispatch) => {
  dispatch({ type: ActionTypes.CREATE_PATIENT_SET_LOADING_TRUE })
  try {
    const { data } = await post(API.rehabPlansEndpoint, formData)
    dispatch({
      type: ActionTypes.CREATE_PATIENT_SUCCESS,
      payload: data,
    })
    dispatch({ type: ActionTypes.CREATE_PATIENT_SET_LOADING_FALSE })
    return API.postRequestSuccess
  } catch (err) {
    dispatch({ type: ActionTypes.CREATE_PATIENT_SET_LOADING_FALSE })
    console.log('err: ', err)
  }

  dispatch({ type: ActionTypes.CREATE_PATIENT_SET_LOADING_FALSE })
}
