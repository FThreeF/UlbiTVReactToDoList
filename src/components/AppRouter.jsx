import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import Error from '../pages/Error';
import {privateRoutes, publicRoutes} from '../router/index';
import {AuthContext} from '../context';
import Loader from './UI/Loader/Loader';

function AppRouter() {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
}

export default AppRouter;
