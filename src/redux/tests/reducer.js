import {
    FETCH_ALL_TESTS_SUCCESS
} from './actionTypes';

const initialState = {
    allTests: []
};

const testsReducer = ( state = initialState, action) => {
    switch (action.type) {
            case FETCH_ALL_TESTS_SUCCESS:
                return {
                    ...state,
                    allTests: action.payload
                }

        default:
            return state;
    };
};

export default testsReducer;
