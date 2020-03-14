import {
    FETCH_ALL_PATIENTS_SUCCESS
} from './actionTypes';

const initialState = {
    allPatients: []
}

const patientsReducer = ( state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_PATIENTS_SUCCESS:
            return {
                ...state,
                allPatients: action.payload
            };

        default:
            return state;
    };
};

export default patientsReducer;
