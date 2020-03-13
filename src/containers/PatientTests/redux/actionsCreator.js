import axios from 'axios'
import { FETCH_ALL_PATIENTS_SUCCESS,FETCH_ALL_TESTS_SUCCESS} from "./actionTypes";
import config from '../../../config'
import { get } from './../../../utils/fetch'


export const getAllPatients = () => async dispatch => {
    try {
        const response = await get('patient')
        console.log('response.data: ', response.data)
        dispatch({
            type: FETCH_ALL_PATIENTS_SUCCESS,
            payload: response.data
        })
    } catch (err) {
        console.log('error: ', err)
    }
};

export const getAllTests = () => async dispatch => {
    try {
        const response = await get('test')
        dispatch({
            type: FETCH_ALL_TESTS_SUCCESS,
            payload: response.data
        })
    } catch (err) {
        console.log('error: ', err)
    }
}
