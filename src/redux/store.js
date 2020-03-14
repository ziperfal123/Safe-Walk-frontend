import { createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from './index'
const initialState = {};
const middlewares = [thunk]

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares))

export default store;
