import { get } from 'utils/fetch';
import {
  FETCH_ALL_TESTS_SUCCESS,
  FETCH_TESTS_BY_ID_SUCCESS,
  CLEAN_TESTS_BY_ID,
  FETCH_TESTS_BY_ID_SET_LOADING_TRUE,
  FETCH_TESTS_BY_ID_SET_LOADING_FALSE,
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
  dispatch({ type: FETCH_TESTS_BY_ID_SET_LOADING_TRUE });
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
  dispatch({ type: FETCH_TESTS_BY_ID_SET_LOADING_FALSE });
};

export const cleanTestsById = () => (dispatch) => {
  dispatch({
    type: CLEAN_TESTS_BY_ID,
  });
};
