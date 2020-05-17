import React from 'react'
import config from 'config'
import { API, AUTH } from 'utils/consts'
import pathsNames from 'router/pathNames'
import { post } from 'utils/fetch'
import * as ActionsTypes from './actionTypes'


export const checkUserAuthStatusOnAppLoad = () => {
  const localToken = localStorage.getItem(config.LOCAL_STORAGE_TOKEN)
  const isTokenExists = !!localToken
  return {
    type: ActionsTypes.CHECK_USER_AUTH_STATUS_ON_APP_LOAD,
    payload: isTokenExists ? AUTH.isAuthenticated : AUTH.isNotAuthenticated,
  }
}

export const handleLoginFormSubmit = (mail, password) => async (dispatch) => {
  dispatch({ type: ActionsTypes.SET_LOADING_TO_TRUE })
  const body = {
    mail,
    password,
  }
  try {
    const { data, status, statusText } = await post(`${API.authEndpoint}/login`, body)
    if (status === 200 && statusText === AUTH.authenticatedMessage) {
      localStorage.setItem(
        config.LOCAL_STORAGE_TOKEN,
        data.token,
      ) // TODO:: is it safe like this???????
      localStorage.setItem('userName', data.name)
      localStorage.setItem('userImage', data.picture)
      localStorage.setItem('therapistId', data.id)
      dispatch({
        type: ActionsTypes.LOGIN_SUCCESS,
        payload: {
          name: data.name,
          img: data.picture,
          id: data.id,
        },
      })
    } else alert('something occured... login didnt complete') // TODO:: learn the behavior of the fetch and change it accordingly
  } catch (err) {
    // TODO:: error handling..
    alert('error has occured when trying to log in.. check form details')
    console.log('err: ', err)
  }
  dispatch({ type: ActionsTypes.SET_LOADING_TO_FALSE })
}

export const handleLogout = (history) => (dispatch) => {
  localStorage.removeItem(config.LOCAL_STORAGE_TOKEN)
  localStorage.removeItem('userName')
  localStorage.removeItem('userImage')
  dispatch({ type: ActionsTypes.LOGOUT })
  history.push(pathsNames.login)
}
