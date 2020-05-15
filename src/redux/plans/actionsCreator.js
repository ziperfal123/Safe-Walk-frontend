import { get, put } from 'utils/fetch'
import { API } from 'utils/consts'
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

export const editPlan = (formData, planId) => async (dispatch) => {
  dispatch({ type: ActionTypes.EDIT_PLAN_BY_ID_SET_LOADING_TRUE })
  console.log('formData + ID: ', formData, planId)
  try {
    const { data, status } = await put(`${API.rehabPlansEndpoint}/${planId}`, formData)
    console.log('data', data)
    console.log('status', status)
    dispatch({
      type: ActionTypes.EDIT_PLAN_BY_ID_SUCCESS,
      payload: data,
    })
  } catch (err) {
    console.log('err: ', err)
  }

  dispatch({ type: ActionTypes.EDIT_PLAN_BY_ID_SET_LOADING_FALSE })
}
