import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import patientsReducer from './patients/reducer';
import testsReducer from './tests/reducer';
import plansReducer from './plans/reducer';

const reducers = combineReducers({
  authReducer,
  patientsReducer,
  testsReducer,
  plansReducer,
});

export default reducers;
