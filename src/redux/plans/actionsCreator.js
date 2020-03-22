import {
  FETCH_ALL_PLANS_SUCCESS,
  FETCH_ALL_PLANS_FAILURE,
  FETCH_ALL_PLANS_SET_LOADING_TRUE,
  FETCH_ALL_PLANS_SET_LOADING_FALSE,
  CLEAN_PLANS_BY_ID,
} from './actionTypes';
import { get } from 'utils/fetch';

// eslint-disable-next-line import/prefer-default-export
export const getPlansById = (id) => async (dispatch) => {
  dispatch({ type: FETCH_ALL_PLANS_SET_LOADING_TRUE });
  try {
    const response = await get(`rehabPlan/${id}}`);
    console.log('response: ', response)
    dispatch({
      type: FETCH_ALL_PLANS_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({ type: FETCH_ALL_PLANS_FAILURE });
    console.log('error: ', err);
  }
  dispatch({ type: FETCH_ALL_PLANS_SET_LOADING_FALSE });
};

export const cleanPlansById = () => (dispatch) => {
  dispatch({
    type: CLEAN_PLANS_BY_ID,
  });
};
