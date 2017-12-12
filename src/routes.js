import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/root/app';
import Home from './components/root/home';
import Data from './components/root/data';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path='/data' component={Data} />
  </Route>
);

export default routes;