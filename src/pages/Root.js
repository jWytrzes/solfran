import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainTemplate from '../templates/MainTemplate';
import Home from './Home';
import Blog from './Blog';
import Post from './Post';
import Login from './Login';
import AdminHomepage from './AdminHomepage';
import AdminNewPost from './AdminNewPost';
import AdminEditPost from './AdminEditPost';
import AdminEditHomepage from './AdminEditHomepage';
import PrivateRoute from '../utils/PrivateRoute';
import NotFound from './NotFound';
import Service from './Service';

const Root = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        duration: 600,
        once: true,
      });
    }, 400);
  }, []);

  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/service">
            <Service />
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
          <PrivateRoute path="/admin/editHomepage" component={AdminEditHomepage} />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </MainTemplate>
    </Router>
  );
};

export default Root;
