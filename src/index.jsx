import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/index';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root'),
);
