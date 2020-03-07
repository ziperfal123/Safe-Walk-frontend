import { combineReducers } from 'redux';

import { CHANGE_LOGGED_IN } from './actionTypes';

const loggedInReducer = ( state = null, action) => {
    switch (action.type) {
        case CHANGE_LOGGED_IN: return action.newValue;
        default: return state;
    };
};


const reducers = combineReducers({
    loggedIn: loggedInReducer,
});


export default reducers;
