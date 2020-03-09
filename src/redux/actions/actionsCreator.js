import { CHECK_USER_AUTH_STATUS_ON_APP_LOAD, LOGIN_SUCCESS, SET_LOADING_TO_TRUE, SET_LOADING_TO_FALSE} from "./actionTypes";
import axios from 'axios'
import config from '../../config'

export const checkUserAuthStatusOnAppLoad = () => {
    const dynamicCheck = true;
    return {
        type: CHECK_USER_AUTH_STATUS_ON_APP_LOAD,
        payload: dynamicCheck
    }
};


export const handleLoginFormSubmit =  (mail, password) => async dispatch => {
    dispatch({ type: SET_LOADING_TO_TRUE });
    const m = 'idan@sds.com12f2';
    const p = 'bfesgnslfkngd';
    const body = {
        mail: m,
        password: p
    };
    try {
        const response = await axios.post(`${config.SERVER_URL}/auth/login`, body);
        if(response.status === 200 && response.statusText === "OK") {
            console.log('response: ', response);
            dispatch({
                type: LOGIN_SUCCESS,
            });
        }

    } catch (err) {
        // TODO:: error handling..
        alert('error has occured when trying to log in.. check form details')
        console.log('err: ', err)
    }
    dispatch({ type: SET_LOADING_TO_FALSE })
};
