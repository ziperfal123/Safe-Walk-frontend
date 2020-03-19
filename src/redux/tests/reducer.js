import {
    FETCH_ALL_TESTS_SUCCESS,
    FETCH_TESTS_BY_ID_SUCCESS
} from './actionTypes';

const initialState = {
    allTests: [],
    allTestsById: []
};

const testsReducer = ( state = initialState, action) => {
    switch (action.type) {
            case FETCH_ALL_TESTS_SUCCESS:
                return {
                    ...state,
                    allTests: action.payload
                }

        case FETCH_TESTS_BY_ID_SUCCESS:
            return {
                ...state,
                allTestsById: action.payload
            }

        default:
            return state;
    };
};

export default testsReducer;
