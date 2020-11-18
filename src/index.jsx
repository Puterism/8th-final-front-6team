import { ChakraProvider } from '@chakra-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage, CategoryPage, ResultPage } from './pages';
import theme from './themes/index';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/category1" exact>
          <CategoryPage />
        </Route>
        <Route path="/result">
          <ResultPage />
        </Route>
      </Switch>
    </Router>
  </ChakraProvider>,
  document.getElementById('root'),
);
