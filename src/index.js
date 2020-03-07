import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import 'antd/dist/antd.css';

import ActuallyMainApp from './AppWrapper';
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ActuallyMainApp />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
