import { FETCH_ALL_PATIENTS_SUCCESS } from './actionTypes';
import { get } from '../../utils/fetch';

// eslint-disable-next-line import/prefer-default-export
export const getAllPatients = () => async (dispatch) => {
  try {
    const response = await get('patient');
    dispatch({
      type: FETCH_ALL_PATIENTS_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    console.log('error: ', err);
  }
};
