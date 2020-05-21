import { get } from 'utils/fetch'
import * as ActionTypes from './actionTypes'


export const getAllTests = () => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_All_TESTS_SET_LOADING_TRUE })
  try {
    const response = await get('test')
    dispatch({
      type: ActionTypes.FETCH_ALL_TESTS_SUCCESS,
      payload: response.data.reverse(),
    })
  } catch (err) {
    console.log('error: ', err)
  }
  dispatch({ type: ActionTypes.FETCH_All_TESTS_SET_LOADING_FALSE })
}

export const getTestsById = (id) => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_TESTS_BY_ID_SET_LOADING_TRUE })
  try {
    const response = await get(`test/patient/${id}`)
    dispatch({
      type: ActionTypes.FETCH_TESTS_BY_ID_SUCCESS,
      payload: response.data.reverse(),
    })
  } catch (e) {
    console.log('e: ', e)
  }
  dispatch({ type: ActionTypes.FETCH_TESTS_BY_ID_SET_LOADING_FALSE })
}

export const cleanTestsById = () => (dispatch) => {
  dispatch({
    type: ActionTypes.CLEAN_TESTS_BY_ID,
  })
}
