import {CHANGE_LOGGED_IN} from "./actionTypes";

export const changeUserAuthStatus = (newUserAuthStatus) => ({
    type: CHANGE_LOGGED_IN,
    payload: newUserAuthStatus,
});
