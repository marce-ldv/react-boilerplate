import React from 'react';
import { Route } from 'react-router-dom';
import { func } from 'prop-types';

const PublicRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={matchProps => <Component {...matchProps} />} />;
};

PublicRoute.propTypes = {
  component: func.isRequired,
};

export default PublicRoute;
