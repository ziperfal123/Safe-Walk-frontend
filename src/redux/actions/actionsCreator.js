import {CHANGE_LOGGED_IN, USER_STATUS_IS_AUTH, LOGIN_SUCCESS} from "./actionTypes";
import axios from 'axios'
import config from '../../config'

export const changeUserAuthStatus = (newUserAuthStatus) => ({
    type: CHANGE_LOGGED_IN,
    payload: newUserAuthStatus,
});

export const checkAuthStatus = () => {
    const dynamicCheck = false
    return {
        type: USER_STATUS_IS_AUTH,
        payload: dynamicCheck
    }
}


export const handleLoginFormSubmit =  (mail, password) => async dispatch => {
    const m = 'idan@sds.com12f2';
    const p = 'bfesgnslfkngd';

    // console.log('mail: ', mail)
    // console.log('password: ', password)

    const body = {
        mail: m,
        password: p
    }
    try {
        const response = await axios.post(`${config.SERVER_URL}/auth/login`, body)
        if(response.status === 200 && response.statusText === "OK") {
            console.log('response: ', response)
            dispatch({
                type: LOGIN_SUCCESS,
            })
        }
    } catch (err) {
        console.log('err: ', err)
    }
}
