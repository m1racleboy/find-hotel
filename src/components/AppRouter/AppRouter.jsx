import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../router/index";
import { changeLoadingStatus, checkAuth } from '../../store/rootReducer';
import Loader from '../UI/Loader/Loader';

export default function AppRouter() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.isAuth);
  const isLoading = useSelector(state => state.isLoading);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(checkAuth(true));
    };
    dispatch(changeLoadingStatus(false));
  }, []);

  if (isLoading) {
    return <Loader />
  }

  return (
    isAuth
      ?
      <Switch>
        {privateRoutes.map(route =>
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Redirect to='/main' />
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Redirect to='/login' />
      </Switch>
  );
};

