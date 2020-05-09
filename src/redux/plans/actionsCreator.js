import { get } from 'utils/fetch'
import * as ActionTypes from './actionTypes'

export const getRehabPlanById = (planId) => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_PLAN_BY_ID_SET_LOADING_TRUE })
  if (!planId) {
    dispatch({
      type: ActionTypes.FETCH_PLAN_BY_ID_SUCCESS,
      payload: null,
    })
  } else {
    try {
      const response = await get(`rehabPlan/${planId}`)
      if (response.status === 200) {
        dispatch({
          type: ActionTypes.FETCH_PLAN_BY_ID_SUCCESS,
          payload: response.data,
        })
      }
    } catch (err) {
      console.log('err: ', err)
    }
  }
  dispatch({ type: ActionTypes.FETCH_PLAN_BY_ID_SET_LOADING_FALSE })
}
