import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './antd/index';
import registerServiceWorker from './registerServiceWorker';
// import 'antd-mobile/dist/antd-mobile.css';
// 引入antd的一种方式 不推荐使用 推荐使用按需加载

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
