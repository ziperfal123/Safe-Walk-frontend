import * as ActionTypes from './actionTypes'

const initialState = {
  allDefaultPlans: [],
  loadingAllPlans: true,
}

const defaultPlansReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_DEFAULT_PLANS_SUCCESS:
      return {
        ...state,
        allDefaultPlans: action.payload,
      }

    default:
      return state
  }
}

export default defaultPlansReducer
