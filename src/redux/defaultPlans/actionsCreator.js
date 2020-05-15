import { get, post } from 'utils/fetch'
import { deepClone } from 'lodash'
import { API } from 'utils/consts'
import * as ActionTypes from './actionTypes'

export const getAllDefaultPlans = () => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_ALL_DEFAULT_PLANS_SET_LOADING_TRUE })
  try {
    const response = await get('defaultPlan')
    if (response.status === 200) {
      dispatch({
        type: ActionTypes.FETCH_ALL_DEFAULT_PLANS_SUCCESS,
        payload: response.data.reverse(),
      })
    }
  } catch (err) {
    console.log('err: ', err)
  }
  dispatch({ type: ActionTypes.FETCH_ALL_DEFAULT_PLANS_SET_LOADING_FALSE })
}

export const createDefaultPlan = (formData) => async (dispatch) => {
  dispatch({ type: ActionTypes.CREATE_DEFAULT_PLAN_SET_LOADING_TRUE })
  try {
    const {
      data: defaultPlanData,
      status: statusCode,
    } = await post(API.defaultPlansEndpoint, formData)

    const addedDefaultPlanObj = {
      id: defaultPlanData.id,
      instructions: defaultPlanData.instructions,
      name: defaultPlanData.name,
      type: defaultPlanData.type,
      videos: [...defaultPlanData.videos],
    }

    if (statusCode >= 200 && statusCode < 300) {
      dispatch({ type: ActionTypes.CREATE_DEFAULT_PLAN_SET_LOADING_FALSE })
      dispatch({
        type: ActionTypes.CREATE_DEFAULT_SUCCESS,
        payload: addedDefaultPlanObj,
      })
      return API.postRequestSuccess
    }
  } catch (err) {
    dispatch({ type: ActionTypes.CREATE_DEFAULT_PLAN_SET_LOADING_FALSE })
    console.log('err: ', err)
    return err
  }
}
