import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/root/app';
import Home from './components/root/home';
import Data from './components/root/data';
import Users from './components/root/users';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path='/data' component={Data} />
    <Route path='/users' component={Users} />
  </Route>
);

export default routes;
