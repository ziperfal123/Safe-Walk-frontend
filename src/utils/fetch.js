import axios from 'axios'
import config from 'config'

const { SERVER_URL } = config


function buildHeader() {
  const token = localStorage.getItem('authToken')
  return { headers: { 'x-auth-token': token } }
}

export async function get(endPointUrl) {
  const configOptions = buildHeader()
  try {
    const res = await axios.get(`${SERVER_URL}/${endPointUrl}`, configOptions)
    return res
  } catch (err) {
    if (err.response) throw new Error(err.response.data)
    throw (err.response.data.message)
  }
}

export async function post(endPointUrl, data) {
  const configOptions = buildHeader()
  try {
    const res = await axios.post(`${SERVER_URL}/${endPointUrl}`, data, configOptions)
    return res
  } catch (err) {
    console.log('err from post', err)
    console.log('err from post', err.response.data.message)
    throw (err.response.data.message)
  }
}

export async function put(endPointUrl, data) {
  const configOptions = buildHeader()
  try {
    const res = await axios.put(`${SERVER_URL}/${endPointUrl}`, data, configOptions)
    return res
  } catch (err) {
    throw (err.response.data.message)
  }
}

export async function del(endPointUrl) {
  const configOptions = buildHeader()
  try {
    const res = await axios.delete(`${SERVER_URL}/${endPointUrl}`, configOptions)
    return res
  } catch (err) {
    console.log('err from delete: ', err)
    throw (err.response.data.message)
  }
}
