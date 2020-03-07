import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import 'antd/dist/antd.css';

import ActuallyMainApp from './ActuallyMainApp';
import reducers from './redux/reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <ActuallyMainApp />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
