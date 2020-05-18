import * as ActionTypes from './actionTypes'

const initialState = {
  allPatients: [],
  loadingAllPatients: false,
  loadingCreatePatient: false,
}

const patientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_PATIENTS_SUCCESS:
      return {
        ...state,
        allPatients: action.payload,
      }

    case ActionTypes.FETCH_ALL_PATIENTS_SET_LOADING_TRUE:
      return {
        ...state,
        loadingAllPatients: true,
      }

    case ActionTypes.FETCH_ALL_PATIENTS_SET_LOADING_FALSE:
      return {
        ...state,
        loadingAllPatients: false,
      }

    case ActionTypes.CREATE_PATIENT_SUCCESS:
      return {
        ...state,
        allPatients: [action.payload, ...state.allPatients],
      }

    case ActionTypes.CREATE_PATIENT_SET_LOADING_TRUE:
      return {
        ...state,
        loadingCreatePatient: true,
      }

    case ActionTypes.CREATE_PATIENT_SET_LOADING_FALSE:
      return {
        ...state,
        loadingCreatePatient: false,
      }

    default:
      return state
  }
}

export default patientsReducer
