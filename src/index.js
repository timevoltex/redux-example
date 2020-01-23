import React from 'react';
import ReactDom from 'react-dom';

import { createStore } from 'redux';
import reducers from './reducers';

import { Provider } from 'react-redux';

import App from './components/App';

const store = createStore(reducers);
console.log(store.getState());
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)