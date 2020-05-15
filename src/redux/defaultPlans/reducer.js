import * as ActionTypes from './actionTypes'

const initialState = {
  allDefaultPlans: [],
  loadingAllDefaultPlans: true,
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

    default:
      return state
  }
}

export default defaultPlansReducer
