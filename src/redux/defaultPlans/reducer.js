import * as ActionTypes from './actionTypes'

const initialState = {
  allDefaultPlans: [],
  loadingAllDefaultPlans: true,
  loadingCreateDefaultPlan: false,
}

const defaultPlansReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_DEFAULT_PLANS_SUCCESS:
      return {
        ...state,
        allDefaultPlans: action.payload,
      }

    case ActionTypes.FETCH_ALL_DEFAULT_PLANS_SET_LOADING_TRUE:
      return {
        ...state,
        loadingAllDefaultPlans: true,
      }

    case ActionTypes.FETCH_ALL_DEFAULT_PLANS_SET_LOADING_FALSE:
      return {
        ...state,
        loadingAllDefaultPlans: false,
      }

    case ActionTypes.CREATE_DEFAULT_SUCCESS:
      return {
        ...state,
        allDefaultPlans: [action.payload, ...state.allDefaultPlans],
      }

    case ActionTypes.CREATE_DEFAULT_PLAN_SET_LOADING_TRUE:
      return {
        ...state,
        loadingCreateDefaultPlan: true,
      }

    case ActionTypes.CREATE_DEFAULT_PLAN_SET_LOADING_FALSE:
      return {
        ...state,
        loadingCreateDefaultPlan: false,
      }

    case ActionTypes.DELETE_DEFAULT_PLAN_SUCCESS:
      return {
        ...state,
        allDefaultPlans: action.payload,
      }

    default:
      return state
  }
}

export default defaultPlansReducer
