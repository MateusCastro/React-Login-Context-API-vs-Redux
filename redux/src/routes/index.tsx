import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './route';

import Home from '../pages/Home';
import Login from '../pages/Login';

// import { Container } from './styles';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} exact isPrivate />
    <Route path="/login" component={Login} />
  </Switch>
);
export default Routes;
