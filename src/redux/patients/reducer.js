import {
  FETCH_ALL_PATIENTS_SUCCESS,
  FETCH_ALL_PATIENTS_SET_LOADING_TRUE,
  FETCH_ALL_PATIENTS_SET_LOADING_FALSE,
} from './actionTypes';

const initialState = {
  allPatients: [],
  loadingAllPatients: false,
};

const patientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PATIENTS_SUCCESS:
      return {
        ...state,
        allPatients: action.payload,
      };

    case FETCH_ALL_PATIENTS_SET_LOADING_TRUE:
      return {
        ...state,
        loadingAllPatients: true,
      };

    case FETCH_ALL_PATIENTS_SET_LOADING_FALSE:
      return {
        ...state,
        loadingAllPatients: false,
      };

    default:
      return state;
  }
};

export default patientsReducer;
