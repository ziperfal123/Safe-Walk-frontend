import { FETCH_ALL_TESTS_SUCCESS} from "./actionTypes";
import { get } from '../../utils/fetch'


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
