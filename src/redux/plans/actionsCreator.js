import { get } from 'utils/fetch'
import {
  FETCH_ALL_DEFAULT_PLANS_SUCCESS,
  FETCH_ALL_DEFAULT_PLANS_FAILURE,
  FETCH_ALL_DEFAULT_PLANS_SET_LOADING_TRUE,
  FETCH_ALL_DEFAULT_PLANS_SET_LOADING_FALSE,
  FETCH_PLAN_BY_ID_SUCCESS,
} from './actionTypes'

export const getRehabPlanById = (planId) => async (dispatch) => {
  if (!planId) {
    dispatch({
      type: FETCH_PLAN_BY_ID_SUCCESS,
      payload: null,
    })
  } else {
    try {
      const response = await get(`rehabPlan/${planId}`)
      if (response.status === 200) {
        dispatch({
          type: FETCH_PLAN_BY_ID_SUCCESS,
          payload: response.data,
        })
      }
    } catch (err) {
      console.log('err: ', err)
    }
  }
}