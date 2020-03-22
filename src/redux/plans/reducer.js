import {
  FETCH_ALL_PLANS_SUCCESS,
  FETCH_ALL_PLANS_FAILURE,
  FETCH_ALL_PLANS_SET_LOADING_TRUE,
  FETCH_ALL_PLANS_SET_LOADING_FALSE,
  CLEAN_PLANS_BY_ID,
} from './actionTypes';

const initialState = {
  allPlansById: [],
  loadingAllPlansById: false,
};

const patientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PLANS_SUCCESS:
      return {
        ...state,
        allPlansById: action.payload,
      };

    case FETCH_ALL_PLANS_SET_LOADING_TRUE:
      return {
        ...state,
        loadingAllPlansById: true,
      };

    case FETCH_ALL_PLANS_SET_LOADING_FALSE:
      return {
        ...state,
        loadingAllPlansById: false,
      };

    case CLEAN_PLANS_BY_ID:
      return {
        ...state,
        allPlansById: [],
      }

    default:
      return state;
  }
};

export default patientsReducer;
