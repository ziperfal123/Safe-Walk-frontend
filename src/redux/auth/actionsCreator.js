import axios from 'axios'
import config from 'config'
import {
  CHECK_USER_AUTH_STATUS_ON_APP_LOAD,
  LOGIN_SUCCESS,
  SET_LOADING_TO_TRUE,
  SET_LOADING_TO_FALSE,
  LOGOUT,
} from './actionTypes'


export const checkUserAuthStatusOnAppLoad = () => {
  const localToken = localStorage.getItem(config.LOCAL_STORAGE_VAR_NAME)
  const isTokenExists = !!localToken
  return {
    type: CHECK_USER_AUTH_STATUS_ON_APP_LOAD,
    payload: isTokenExists,
  }
}

export const handleLoginFormSubmit = (mail, password) => async (dispatch) => {
  dispatch({ type: SET_LOADING_TO_TRUE })
  const m = 'idan@sds.com12f2'
  const p = 'bfesgnslfkngd'
  const body = {
    mail: m,
    password: p,
  }
  try { // TODO:: use the fetch util file!!!! mot directly with axios!
    const response = await axios.post(`${config.SERVER_URL}/auth/login`, body)
    console.log(response)
    if (response.status === 200 && response.statusText === 'OK') {
      localStorage.setItem(
        config.LOCAL_STORAGE_VAR_NAME,
        response.data.token,
      ) // TODO:: is it safe like this???????
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {name: response.data.name, img: response.data.picture}
      })
    } else alert('something occured... login didnt complete') // TODO:: learn the behavior of the fetch and change it accordingly
  } catch (err) {
    // TODO:: error handling..
    alert('error has occured when trying to log in.. check form details')
    console.log('err: ', err)
  }
  dispatch({ type: SET_LOADING_TO_FALSE })
}

export const handleLogout = () => (dispatch) => {
  localStorage.removeItem(config.LOCAL_STORAGE_VAR_NAME)
  dispatch({ type: LOGOUT })
}
