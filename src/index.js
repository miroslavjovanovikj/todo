import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger'
import {Provider} from 'react-redux';
import '././style/css/Index.css';
import thunk from 'redux-thunk';
import {loadState, saveState} from './services/localStorage';
import throttle from 'loadsh/throttle'

import {todoReducer} from './reducers/todoReducer';
const presistedState = loadState()
const store = createStore(todoReducer,presistedState, applyMiddleware(thunk,createLogger()))
store.subscribe(throttle(()=>{
  saveState({
    darkMode:store.getState().darkMode,
    list:store.getState().list


  });

}, 1000))
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
