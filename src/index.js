import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHashHistory from 'history/createHashHistory';
import App from './App';
import createStore from './createStore';

const history = createHashHistory();

const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
