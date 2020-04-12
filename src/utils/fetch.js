import axios from 'axios'
import config from 'config'

const { SERVER_URL } = config


function buildHeader() {
  const token = localStorage.getItem('authToken')
  return { headers: { 'x-auth-token': token } }
}

export async function get(endPointUrl) {
  const options = buildHeader()
  try {
    const res = await axios.get(`${SERVER_URL}/${endPointUrl}`, options)
    return res
  } catch (err) {
    if (err.response) throw new Error(err.response.data)
    else throw err
  }
}

export function post() {}

export function put() {}

export function del() {}
