import {
    FETCH_ALL_PATIENTS_SUCCESS,
    FETCH_ALL_TESTS_SUCCESS
} from './actionTypes';

const initialState = {
    allPatients: [],
    allTests: []
}

const patientsTestsReducer = ( state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_PATIENTS_SUCCESS:
            return {
                ...state,
                allPatients: action.payload
            };

            case FETCH_ALL_TESTS_SUCCESS:
                return {
                    ...state,
                    allTests: action.payload
                }

        default:
            return state;
    };
};

export default patientsTestsReducer;
