import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Home from './Home';
import Blog from './Blog';
import Post from './Post';
import Login from './Login';
import AdminPanel from './AdminPanel';

const Root = () => {
  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <Post />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <AdminPanel />
          </Route>
        </Switch>
      </MainTemplate>
    </Router>
  );
};

export default Root;
