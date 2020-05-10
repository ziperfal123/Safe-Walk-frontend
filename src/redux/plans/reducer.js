import * as ActionTypes from './actionTypes'

const initialState = {
  planById: null,
  loadingPlanById: true,
  loadingEditPlan: false,
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

    case ActionTypes.EDIT_PLAN_BY_ID_SUCCESS:
      return {
        ...state,
        planById: { ...action.payload },
      }

    case ActionTypes.EDIT_PLAN_BY_ID_SET_LOADING_TRUE:
      return {
        ...state,
        loadingEditPlan: true,
      }

    case ActionTypes.EDIT_PLAN_BY_ID_SET_LOADING_FALSE:
      return {
        ...state,
        loadingEditPlan: false,
      }


    default:
      return state
  }
}

export default plansReducer
