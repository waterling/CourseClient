import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import App from './App'


import store from './store';
import RouterSite from './routers/router';


ReactDOM.render(
    <Provider store={store}>
        <RouterSite/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
