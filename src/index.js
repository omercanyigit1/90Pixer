import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from "redux";
import createLogger from 'redux-logger';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';

import rootReducer from './appRedux/reducers';
import App from './App';

const appStore = createStore(rootReducer, {}, applyMiddleware(thunk, createLogger));

export default appStore;

ReactDOM.render( <Provider store={appStore}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
