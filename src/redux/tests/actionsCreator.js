import { get } from 'utils/fetch';
import {
  FETCH_ALL_TESTS_SUCCESS,
  FETCH_TESTS_BY_ID_SUCCESS,
  CLEAN_TESTS_BY_ID,
}
  from './actionTypes';


export const getAllTests = () => async (dispatch) => {
  try {
    const response = await get('test');
    dispatch({
      type: FETCH_ALL_TESTS_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    console.log('error: ', err);
  }
};

export const getTestsById = (id) => async (dispatch) => {
  try {
    const response = await get(`test/patient/${id}`);
    console.log('response: ', response);
    dispatch({
      type: FETCH_TESTS_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    console.log('e: ', e);
  }
};

export const cleanTestsById = () => (dispatch) => {
  dispatch({
    type: CLEAN_TESTS_BY_ID,
  });
};
