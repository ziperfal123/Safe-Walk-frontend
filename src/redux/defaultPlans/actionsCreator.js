import { del, get, post } from 'utils/fetch'
import { API } from 'utils/consts'
import store from 'redux/store'
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
  } catch (errMessage) {
    dispatch({ type: ActionTypes.CREATE_DEFAULT_PLAN_SET_LOADING_FALSE })
    console.log('err: ', errMessage)
    return errMessage
  }
}


export const deleteDefaultPlan = (idToDelte) => async (dispatch) => {
  const arrOfDefaultPlans = [...store.getState().defaultPlansReducer.allDefaultPlans]
  try {
    const { status: statusCode } = await del(`${API.defaultPlansEndpoint}/${idToDelte}`)
    // TODO:: CHANGE! should get 400+ when error, not 202
    if (statusCode >= 200 && statusCode < 300 && statusCode !== 202) {
      const newArrOfDefaultPlans = arrOfDefaultPlans.filter((plan) => plan.id !== idToDelte)
      dispatch({
        type: ActionTypes.DELETE_DEFAULT_PLAN_SUCCESS,
        payload: newArrOfDefaultPlans,
      })
      return API.deleteRequestSuccess
    }
  } catch (errMessage) {
    console.log('err: ', errMessage)
    return errMessage
  }
}

export const setLoadingToTrue = () => (dispatch) => {
  dispatch({
    type: ActionTypes.FETCH_ALL_DEFAULT_PLANS_SET_LOADING_TRUE,
  })
}
