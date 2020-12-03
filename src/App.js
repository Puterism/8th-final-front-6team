import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/core';
import { RecoilRoot } from 'recoil';
import {
  MainPage, CategoryPage, ResultPage, SelectionPage,
} from './pages';
import theme from './themes/index';
import './index.css';
import Counter from './states/Counter';

function App() {
  return (
    <RecoilRoot>
      <Counter />
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
            <Route path="/selection" exact>
              <SelectionPage />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
