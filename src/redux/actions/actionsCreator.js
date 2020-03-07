import {CHANGE_LOGGED_IN} from "./actionTypes";

export const changeLoggedIn = (newUserAuthStatus) => ({
    type: CHANGE_LOGGED_IN,
    payload: newUserAuthStatus,
});
