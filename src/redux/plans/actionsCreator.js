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
    } catch (errMessage) {
      console.log('err: ', errMessage)
      return errMessage
    }
  }
  dispatch({ type: ActionTypes.FETCH_PLAN_BY_ID_SET_LOADING_FALSE })
}

export const createPlan = (formData) => async (dispatch) => {
  dispatch({ type: ActionTypes.EDIT_PLAN_BY_ID_SET_LOADING_TRUE })
  try {
    const { data, status } = await post(API.rehabPlansEndpoint, formData)
    dispatch({
      type: ActionTypes.CREATE_PLAN_SUCCESS,
      payload: data,
    })
    dispatch({ type: ActionTypes.EDIT_PLAN_BY_ID_SET_LOADING_FALSE })
    return API.postRequestSuccess
  } catch (errMessage) {
    dispatch({ type: ActionTypes.EDIT_PLAN_BY_ID_SET_LOADING_FALSE })
    console.log('err: ', errMessage)
    return errMessage
  }
}

export const editPlan = (formData, planId) => async (dispatch) => {
  dispatch({ type: ActionTypes.EDIT_PLAN_BY_ID_SET_LOADING_TRUE })
  try {
    const { data, status: statusCode } = await put(`${API.rehabPlansEndpoint}/${planId}`, formData)
    if (statusCode >= 200 && statusCode < 300) {
      dispatch({ type: ActionTypes.EDIT_PLAN_BY_ID_SET_LOADING_FALSE })
      dispatch({
        type: ActionTypes.EDIT_PLAN_BY_ID_SUCCESS,
        payload: data,
      })
    }
    return API.postRequestSuccess
  } catch (errMessage) {
    dispatch({ type: ActionTypes.EDIT_PLAN_BY_ID_SET_LOADING_FALSE })
    console.log('err: ', errMessage)
    return errMessage
  }
}
