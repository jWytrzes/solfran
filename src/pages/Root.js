import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Home from './Home';
import Blog from './Blog';

const Root = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/blog" component={Blog} /> */}
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
