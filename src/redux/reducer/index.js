
import { combineReducers } from 'redux';
import authReducer from './authReducer'

import { CHANGE_LOGGED_IN } from '../actions/actionTypes';



const reducers = combineReducers({
    authReducer: authReducer,
});


export default reducers;
