import { get } from 'utils/fetch'
import * as ActionTypes from './actionTypes'

export const getAllDefaultPlans = () => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_ALL_DEFAULT_PLANS_SET_LOADING_TRUE })
  try {
    const response = await get('defaultPlan')
    console.log('response', response)
    if (response.status === 200) {
      dispatch({
        type: ActionTypes.FETCH_ALL_DEFAULT_PLANS_SUCCESS,
        payload: response.data,
      })
    }
  } catch (err) {
    console.log('err: ', err)
  }
  dispatch({ type: ActionTypes.FETCH_ALL_DEFAULT_PLANS_SET_LOADING_FALSE })
}
