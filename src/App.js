import React, { Component } from 'react';
// import { Switch, Route, Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Auth from './component/auth/index'
import Login from './container/login'
import Register from './container/register'
import BossInfo from './container/bossInfo/bossInfo'
import GeniusInfo from './container/geniusInfo/geniusInfo'

import './App.css'

// import Page from './redux/page'
// import PageTwo from './redux/page2'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
        <Route path='/bossinfo' component={BossInfo} />
        <Route path='/geniusinfo' component={GeniusInfo} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        {/*<ul>*/}
          {/*<li>*/}
            {/*<Link to="/">PageOne</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
            {/*<Link to="/page2">PageTwo</Link>*/}
          {/*</li>*/}
        {/*</ul>*/}
        {/*<Switch>*/}
          {/*<Route exact path='/' component={Page}/>*/}
          {/*<Route path='/page2' component={PageTwo}/>*/}
        {/*</Switch>*/}
      </div>
    );
  }
}

export default App;
