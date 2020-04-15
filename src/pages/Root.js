import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Home from './Home';
import Blog from './Blog';
import Post from './Post';
import Login from './Login';
import AdminHomepage from './AdminHomepage';
import AdminNewPost from './AdminNewPost';
import AdminEditPost from './AdminEditPost';
import AdminValuationRequests from './AdminValuationRequests';
import PrivateRoute from '../utils/PrivateRoute';
import { checkUserToken } from '../utils';

const Root = () => {
  let authenticated = checkUserToken();
  if (!authenticated && window.location.pathname !== '/login') {
    window.location.href = '/login';
  }

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
          <PrivateRoute exact path="/admin" component={AdminHomepage} />
          <PrivateRoute path="/admin/new" component={AdminNewPost} />
          <PrivateRoute path="/admin/edit/:id" component={AdminEditPost} />
          <PrivateRoute path="/admin/valuationRequests" component={AdminValuationRequests} />
        </Switch>
      </MainTemplate>
    </Router>
  );
};

export default Root;
