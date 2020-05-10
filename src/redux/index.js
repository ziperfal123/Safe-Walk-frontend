import { combineReducers } from 'redux'
import gaitModelReducer from './gaitModel/reducer'
import authReducer from './auth/authReducer'
import patientsReducer from './patients/reducer'
import testsReducer from './tests/reducer'
import plansReducer from './plans/reducer'
import defaultPlansReducer from "./defaultPlans/reducer"
import videosReducer from './videos/reducer'
import errorReducer from './error/reducer'

const reducers = combineReducers({
  authReducer,
  errorReducer,
  patientsReducer,
  testsReducer,
  gaitModelReducer,
  plansReducer,
  defaultPlansReducer,
  videosReducer,
})

export default reducers
