import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import { Route, Switch, Redirect } from 'react-router-dom';
import { LOGIN_ROUTE, CHAT_ROUTE } from '../utils/consts';
import { privateRoutes, publicRoutes } from './routes';

const AppRouter = () => {
  const user = false
  return user ?
    (
      // <Switch>
      <Routes>
        {privateRoutes.map(({ path, Component }) =>
          <Route path={path} element={<Component/>} exact={true} />
          // <Route path={path} component={Component} exact={true} />
        )}
        <Navigate to={CHAT_ROUTE} />
      </Routes>
      // </Switch>

    )
    : (
      // <Switch>
      <Routes>
        {publicRoutes.map(({ path, Component }) =>
          <Route path={path} element={<Component/>} exact={true} />
          // <Route path={path} component={Component} exact={true} />
        )}
        <Navigate to={LOGIN_ROUTE} />
      </Routes>
      // </Switch>

    );
};

export default AppRouter;