import React from 'react';

import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { User } from '../common/types';

import { ApplicationState } from '../store';

interface Props {
  path: string,
  component: React.FC,
  isPrivate?: boolean,
  exact?: boolean,
}

const RouteWrapper: React.FC<Props> = ({
  path, component, isPrivate, exact,
}) => {
  const user = useSelector<ApplicationState, User>(
    (state) => state.user,
  );

  if (isPrivate && !user.login) {
    return <Redirect to="/login" />;
  }

  if (!isPrivate && user.login) {
    return <Redirect to="/" />;
  }

  return <Route path={path} component={component} exact={exact} />;
};

export default RouteWrapper;
