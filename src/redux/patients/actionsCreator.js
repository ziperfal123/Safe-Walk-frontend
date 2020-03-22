import {
  FETCH_ALL_PATIENTS_SUCCESS,
  FETCH_ALL_PATIENTS_FAILURE,
  FETCH_ALL_PATIENTS_SET_LOADING_TRUE,
  FETCH_ALL_PATIENTS_SET_LOADING_FALSE,
} from './actionTypes';
import { get } from 'utils/fetch';

// eslint-disable-next-line import/prefer-default-export
export const getAllPatients = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_PATIENTS_SET_LOADING_TRUE });
  try {
    const response = await get('patient');
    dispatch({
      type: FETCH_ALL_PATIENTS_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({ type: FETCH_ALL_PATIENTS_FAILURE });
    console.log('error: ', err);
  }
  dispatch({ type: FETCH_ALL_PATIENTS_SET_LOADING_FALSE });
};
