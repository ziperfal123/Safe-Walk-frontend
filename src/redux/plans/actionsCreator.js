import { get, put, post } from 'utils/fetch'
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

export const createPlan = (formData) => async (dispatch) => {
  dispatch({ type: ActionTypes.EDIT_PLAN_BY_ID_SET_LOADING_TRUE })
  try {
    const { data } = await post(API.rehabPlansEndpoint, formData)
    dispatch({
      type: ActionTypes.CREATE_PLAN_SUCCESS,
      payload: data,
    })
    dispatch({ type: ActionTypes.EDIT_PLAN_BY_ID_SET_LOADING_FALSE })
    return API.postRequestSuccess
  } catch (err) {
    dispatch({ type: ActionTypes.EDIT_PLAN_BY_ID_SET_LOADING_FALSE })
    console.log('err: ', err)
  }

  dispatch({ type: ActionTypes.EDIT_PLAN_BY_ID_SET_LOADING_FALSE })
}

export const editPlan = (formData, planId) => async (dispatch) => {
  dispatch({ type: ActionTypes.EDIT_PLAN_BY_ID_SET_LOADING_TRUE })
  console.log('formData + ID: ', formData, planId)
  try {
    const { data } = await put(`${API.rehabPlansEndpoint}/${planId}`, formData)
    dispatch({
      type: ActionTypes.EDIT_PLAN_BY_ID_SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({ type: ActionTypes.EDIT_PLAN_BY_ID_SET_LOADING_FALSE })
    console.log('err: ', err)
  }
}
