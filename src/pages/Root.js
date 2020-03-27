import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GoogleFontLoader from 'react-google-font-loader';
import MainTemplate from '../templates/MainTemplate';
import Home from './Home';
import NotFound from './NotFound';

const Root = () => {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Montserrat',
            weights: [400, 500, 600, 700, 900],
          },
        ]}
        subsets={['latin-ext']}
      />

      <Router>
        <MainTemplate>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </MainTemplate>
      </Router>
    </>
  );
};

export default Root;
