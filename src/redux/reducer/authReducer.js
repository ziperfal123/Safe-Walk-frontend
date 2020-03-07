import {CHANGE_LOGGED_IN, LOGIN_SUCCESS, USER_STATUS_IS_AUTH} from '../actions/actionTypes';

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
            break;
        case USER_STATUS_IS_AUTH:
            return {
                ...state,
                isUserAuthenticated: action.payload
            }
            break;
        case LOGIN_SUCCESS:
            return {
                ...state,
                isUserAuthenticated: true
            }


        default: return state;
    };
};

export default authReducer;
