import {
  FETCH_ALL_TESTS_SUCCESS,
  // eslint-disable-next-line camelcase
  FETCH_All_TESTS_SET_LOADING_TRUE,
  // eslint-disable-next-line camelcase
  FETCH_All_TESTS_SET_LOADING_FALSE,
  FETCH_TESTS_BY_ID_SUCCESS,
  CLEAN_TESTS_BY_ID,
  FETCH_TESTS_BY_ID_SET_LOADING_TRUE,
  FETCH_TESTS_BY_ID_SET_LOADING_FALSE,
} from './actionTypes';

const initialState = {
  allTests: [],
  loadingAllTests: false,
  allTestsById: [],
  loadingAllTestsById: false,
};

const testsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_TESTS_SUCCESS:
      return {
        ...state,
        allTests: action.payload,
      };

      // eslint-disable-next-line camelcase
    case FETCH_All_TESTS_SET_LOADING_TRUE:
      return {
        ...state,
        loadingAllTests: true,
      };

      // eslint-disable-next-line camelcase
    case FETCH_All_TESTS_SET_LOADING_FALSE:
      return {
        ...state,
        loadingAllTests: false,
      };

    case FETCH_TESTS_BY_ID_SUCCESS:
      return {
        ...state,
        allTestsById: action.payload,
      };

    case CLEAN_TESTS_BY_ID: {
      return {
        ...state,
        allTestsById: [],
      };
    }

    case FETCH_TESTS_BY_ID_SET_LOADING_TRUE:
      return {
        ...state,
        loadingAllTestsById: true,
      };

    case FETCH_TESTS_BY_ID_SET_LOADING_FALSE:
      return {
        ...state,
        loadingAllTestsById: false,
      };

    default:
      return state;
  }
};

export default testsReducer;
