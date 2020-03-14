import { FETCH_ALL_PATIENTS_SUCCESS,FETCH_ALL_TESTS_SUCCESS} from "./actionTypes";
import { get } from '../../utils/fetch'


export const getAllPatients = () => async dispatch => {
    try {
        const response = await get('patient')
        dispatch({
            type: FETCH_ALL_PATIENTS_SUCCESS,
            payload: response.data
        })
    } catch (err) {
        console.log('error: ', err)
    }
};