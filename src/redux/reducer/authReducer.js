import {
    CHANGE_LOGGED_IN,
    LOGIN_SUCCESS,
    USER_STATUS_IS_AUTH,
    SET_LOADING_TO_TRUE,
    SET_LOADING_TO_FALSE
} from '../actions/actionTypes';

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
            break;

        case SET_LOADING_TO_TRUE:
            return {
                ...state,
                loading: true
            }
        case SET_LOADING_TO_FALSE:
            console.log('false')
            return {
                ...state,
                loading: false
            }



        default: return state;
    };
};

export default authReducer;
