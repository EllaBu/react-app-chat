import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './index.css';
import App from './redux/page';
import { counter } from './redux/index'
import registerServiceWorker from './registerServiceWorker';
// import 'antd-mobile/dist/antd-mobile.css';
// 引入antd的一种方式 不推荐使用 推荐使用按需加载

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension():f=>f
))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
