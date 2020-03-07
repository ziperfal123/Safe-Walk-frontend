import {CHANGE_LOGGED_IN, USER_STATUS_IS_AUTH} from "./actionTypes";

export const changeUserAuthStatus = (newUserAuthStatus) => ({
    type: CHANGE_LOGGED_IN,
    payload: newUserAuthStatus,
});

export const checkAuthStatus = () => {
    const dynamicCheck = false
    return {
        type: USER_STATUS_IS_AUTH,
        payload: dynamicCheck
    }
}
