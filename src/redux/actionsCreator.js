import {CHANGE_LOGGED_IN} from "./actionTypes";

export const changeLoggedIn = (newValue) => ({
    type: CHANGE_LOGGED_IN,
    newValue: newValue,
});
