import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerReducer } from 'react-router-redux'
import './index.css';
import App from './redux/page';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
// import 'antd-mobile/dist/antd-mobile.css';
// 引入antd的一种方式 不推荐使用 推荐使用按需加载
const middlewares = [thunk]
const store = createStore(
  combineReducers({ routing: routerReducer, ...rootReducer }),
  composeWithDevTools(applyMiddleware(...middlewares))
)
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
