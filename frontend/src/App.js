import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import RegisterPage from './components/register';
import LoginPage from './components/login';
//import MainPage from './components/main';
import Front from './components/main';
import Page1 from './components/page1';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Page1} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/front" exact component={Front} />
        </Switch>
      </Router>
    );
  }
}

export default App;