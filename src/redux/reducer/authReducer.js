import { combineReducers } from 'redux';
import { CHANGE_LOGGED_IN } from '../actions/actionTypes';

// const initialState = {
//     loggedIn: null,
//     loading: false
// }

const loggedInReducer = ( state = null, action) => {
    switch (action.type) {
        case CHANGE_LOGGED_IN: return action.payload;
        default: return state;
    };
};


const reducers = combineReducers({
    loggedIn: loggedInReducer,
});


export default reducers;
