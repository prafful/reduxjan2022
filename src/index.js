import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import allFriendReducers from './reducers/reducer-combineall';

const friendStore = createStore(allFriendReducers)

console.log(friendStore)

ReactDOM.render(
  <Provider store={friendStore}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);


