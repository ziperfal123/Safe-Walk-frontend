import axios from 'axios'
import {SERVER_URL} from '../../../config'
import config from '../../../config'

export const handleLoginFormSubmit =  (mail, password) => async dispatch => {
    const m = 'idan@sds.com12f2';
    const p = 'bfesgnslfkngd';

    console.log('mail: ', mail)
    console.log('password: ', password)
    const body = {
        mail: m,
        password: p
    }
    try {
        const response = await axios.post(`${config.SERVER_URL}/auth/login`, body)
        if(response.status === 200 && response.statusText === "OK")
            console.log('response: ', response)
    } catch (err) {
        console.log('err: ', err)
    }
            // .then( res=>console.log('res: ', res))
            // .catch( err => console.log('err: ', err))
    // dispatch({
    //     type: 'a',
    //     payload: 'a'
    // })
}
