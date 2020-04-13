import { combineReducers } from 'redux'
import gaitModelReducer from './gaitModel/reducer'
import authReducer from './auth/authReducer'
import patientsReducer from './patients/reducer'
import testsReducer from './tests/reducer'
import plansReducer from './plans/reducer'

const reducers = combineReducers({
  authReducer,
  patientsReducer,
  testsReducer,
  gaitModelReducer,
  plansReducer,
})

export default reducers
