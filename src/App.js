import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import Page from './redux/page'
import PageTwo from './redux/page2'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/">PageOne</Link>
          </li>
          <li>
            <Link to="/page2">PageTwo</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Page}/>
          <Route path='/page2' component={PageTwo}/>
        </Switch>
      </div>
    );
  }
}

export default App;
