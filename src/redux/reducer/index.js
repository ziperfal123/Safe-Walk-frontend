
import { combineReducers } from 'redux';
import authReducer from './authReducer'
import patientsTestsReducer from '../../containers/PatientTests/redux/reducer'




const reducers = combineReducers({
    authReducer: authReducer,
    patientsTestsReducer: patientsTestsReducer
});


export default reducers;
