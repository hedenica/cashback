import React, { Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import signInRoutes from './SignIn/routes';
import signUpRoutes from './SignUp/routes';
import dashboardRoutes from './Dashboard/routes';

const routes = [...signInRoutes, ...signUpRoutes, ...dashboardRoutes];

const Routes = () => (
  <Router>
    <Suspense fallback={<div />}>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.name}
            path={route.path}
            render={props => (
              <route.component {...props} routes={route.routes} />
            )}
            exact
          />
        ))}
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
