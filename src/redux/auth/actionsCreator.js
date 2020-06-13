import React from 'react'
import config from 'config'
import { API, AUTH } from 'utils/consts'
import pathsNames from 'router/pathNames'
import { post } from 'utils/fetch'
import * as ActionsTypes from './actionTypes'


export const checkUserAuthStatusOnAppLoad = (history) => {

  const localToken = localStorage.getItem(config.LOCAL_STORAGE_TOKEN)
  const isTokenExists = !!localToken
  let isTokenExpired
  if (isTokenExists) {
    const tokenExperationDate = new Date(localStorage.getItem('tokenExperationDate'))
    isTokenExpired = new Date().getTime() > tokenExperationDate.getTime()
    // if (isTokenExpired) {
    //   localStorage.clear()
    //   history.push(pathsNames.login)
    //   alert(AUTH.tokenExperationAlert)
    // }
  }
  return {
    type: ActionsTypes.CHECK_USER_AUTH_STATUS_ON_APP_LOAD,
    // payload: isTokenExists && !isTokenExpired ? AUTH.isAuthenticated : AUTH.isNotAuthenticated,
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
      const now = new Date()
      const experationDate = new Date(now.getTime() + data.tokenExpires)
      localStorage.setItem(
        config.LOCAL_STORAGE_TOKEN,
        data.token,
      )
      localStorage.setItem('userName', data.name)
      localStorage.setItem('userImage', data.picture)
      localStorage.setItem('therapistId', data.id)
      localStorage.setItem('tokenExperationDate', experationDate)
      dispatch({
        type: ActionsTypes.LOGIN_SUCCESS,
        payload: {
          name: data.name,
          img: data.picture,
          id: data.id,
        },
      })
    } else alert('something occured... login didnt complete')
  } catch (err) {
    alert(AUTH.wrongLoginAlert)
    console.log('err: ', err)
  }
  dispatch({ type: ActionsTypes.SET_LOADING_TO_FALSE })
}

export const handleLogout = (history) => (dispatch) => {
  localStorage.clear()
  dispatch({ type: ActionsTypes.LOGOUT })
  history.push(pathsNames.login)
}
