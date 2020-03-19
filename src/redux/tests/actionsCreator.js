import { FETCH_ALL_TESTS_SUCCESS, FETCH_TESTS_BY_ID_SUCCESS } from "./actionTypes";
import { get } from '../../utils/fetch'


export const getAllTests = () => async dispatch => {
    try {
        const response = await get('test');
        dispatch({
            type: FETCH_ALL_TESTS_SUCCESS,
            payload: response.data
        })
    } catch (err) {
        console.log('error: ', err)
    }
};

export const getTestsById = id => async dispatch => {
    try {
        const response = await get(`test/${id}`)
        dispatch({
            type: FETCH_TESTS_BY_ID_SUCCESS,
            payload: response.data
        })
    }    catch {

    }
}
