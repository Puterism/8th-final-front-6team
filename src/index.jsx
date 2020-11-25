import { ChakraProvider } from '@chakra-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  MainPage, CategoryPage, ResultPage, SelectionPage,
} from './pages';
import theme from './themes/index';
import './index.css';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/categories" exact>
          <CategoryPage />
        </Route>
        <Route path="/about" exact>
          <CategoryPage />
        </Route>
        <Route path="/contact" exact>
          <CategoryPage />
        </Route>
        <Route path="/faq" exact>
          <CategoryPage />
        </Route>
        <Route path="/result">
          <ResultPage />
        </Route>
        <Route path="/selection" exact>
          <SelectionPage />
        </Route>
      </Switch>
    </Router>
  </ChakraProvider>,
  document.getElementById('root'),
);
