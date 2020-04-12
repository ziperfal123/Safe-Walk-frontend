import {
  FETCH_ALL_DEFAULT_PLANS_SUCCESS,
  FETCH_ALL_DEFAULT_PLANS_FAILURE,
  FETCH_ALL_DEFAULT_PLANS_SET_LOADING_TRUE,
  FETCH_ALL_DEFAULT_PLANS_SET_LOADING_FALSE,
  FETCH_PLAN_BY_ID
} from './actionTypes';
import { get } from 'utils/fetch';

export const getRehabPlanById = (planId) => async (dispatch) => {
  if (!planId) {
    dispatch({
      type: FETCH_PLAN_BY_ID,
      payload: null,
    })
  }
  else {
    try{
      const response = await get(`rehabPlan/${planId}`)
      console.log('response: ', response)
    } catch {}
  }
}

// export const getAllPatients = () => async (dispatch) => {
//   dispatch({ type: FETCH_ALL_PATIENTS_SET_LOADING_TRUE });
//   try {
//     const response = await get('patient');
//     dispatch({
//       type: FETCH_ALL_PATIENTS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (err) {
//     dispatch({ type: FETCH_ALL_PATIENTS_FAILURE });
//     console.log('error: ', err);
//   }
//   dispatch({ type: FETCH_ALL_PATIENTS_SET_LOADING_FALSE });
// };
