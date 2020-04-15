import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkUserToken } from '.';

const PrivateRoute = ({ component: RouteComponent, ...props }) => {
  const authenticated = checkUserToken();
  return <Route {...props} render={(routeProps) => (!!authenticated ? <RouteComponent {...routeProps} /> : <Redirect to="/login" />)} />;
};

export default PrivateRoute;
