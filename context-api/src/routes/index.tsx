import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';

// import { Container } from './styles';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/login" component={Login} />
  </Switch>
);
export default Routes;
