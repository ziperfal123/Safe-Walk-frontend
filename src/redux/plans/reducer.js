import * as ActionTypes from './actionTypes'

const initialState = {
  planById: null,
  loadingPlanById: true,
}

const plansReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PLAN_BY_ID_SUCCESS:
      return {
        ...state,
        planById: action.payload,
      }

    case ActionTypes.FETCH_PLAN_BY_ID_SET_LOADING_TRUE:
      return {
        ...state,
        loadingPlanById: true,
      }

    case ActionTypes.FETCH_PLAN_BY_ID_SET_LOADING_FALSE:
      return {
        ...state,
        loadingPlanById: false,
      }
    default:
      return state
  }
}

export default plansReducer
