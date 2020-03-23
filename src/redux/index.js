import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import patientsReducer from './patients/reducer';
import testsReducer from './tests/reducer';

const reducers = combineReducers({
  authReducer,
  patientsReducer,
  testsReducer,
});

export default reducers;
