import * as ActionTypes from './actionTypes'

const initialState = {
  allKits: [],
  loadingAllKits: false,
}

const kitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_KITS_SUCCESS:
      return {
        ...state,
        allKits: action.payload,
      }

    case ActionTypes.FETCH_ALL_KITS_SET_LOADING_TRUE:
      return {
        ...state,
        loadingAllKits: true,
      }

    case ActionTypes.FETCH_ALL_KITS_SET_LOADING_FALSE:
      return {
        ...state,
        loadingAllKits: false,
      }

    default:
      return state
  }
}

export default kitsReducer
