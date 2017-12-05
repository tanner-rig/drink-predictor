import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/root/app';
import Home from './components/root/home';
import Data from './components/root/data';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path='/data' component={Data} />
    </Route>
  </Router>
);

export default routes;