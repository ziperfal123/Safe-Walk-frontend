import {
  FETCH_ALL_DEFAULT_PLANS_SUCCESS,
  FETCH_ALL_DEFAULT_PLANS_FAILURE,
  FETCH_ALL_DEFAULT_PLANS_SET_LOADING_TRUE,
  FETCH_ALL_DEFAULT_PLANS_SET_LOADING_FALSE,
  FETCH_PLAN_BY_ID_SET_LOADING_TRUE,
  FETCH_PLAN_BY_ID_SET_LOADING_FALSE,
  FETCH_PLAN_BY_ID_SUCCESS,
} from './actionTypes'

const initialState = {
  planById: null,
  loadingPlanById: true,
}

const plansReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAN_BY_ID_SUCCESS:
      return {
        ...state,
        planById: action.payload,
      }

    case FETCH_PLAN_BY_ID_SET_LOADING_TRUE:
      return {
        ...state,
        loadingPlanById: true,
      }

    case FETCH_PLAN_BY_ID_SET_LOADING_FALSE:
      return {
        ...state,
        loadingPlanById: false,
      }
    default:
      return state
  }
}

export default plansReducer
