import { combineReducers } from 'redux';
import { CHANGE_LOGGED_IN } from '../actions/actionTypes';

const initialState = {
    isUserAuthenticated: null,
    loading: false
}

const authReducer = ( state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOGGED_IN:
            return {
                ...state,
                isUserAuthenticated: action.payload
            }
        default: return state;
    };
};

export default authReducer;
