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
    else throw err
  }
}

export async function post(endPointUrl, data) {
  const configOptions = buildHeader()
  try {
    const res = await axios.post(`${SERVER_URL}/${endPointUrl}`, data, configOptions)
    console.log('res: ', res)
    return res
  } catch (err) {
    console.log('err from post:: ', err)
    if (err.response) throw new Error(err.response.data)
  }
}

export function put() {}

export function del() {}
