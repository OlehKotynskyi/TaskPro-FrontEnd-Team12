import React, { lazy, useEffect, useRef } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { Layout } from '../components/Layout/Layout';
import {
  selectIsRefreshing,
  selectAccessToken,
} from '../redux/auth/authSelectors';
import { refreshUser } from '../redux/auth/authOperations';
import { Loader } from '../components/Loaders/Loader';

import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const accessToken = useSelector(selectAccessToken);
  const isRequestingRef = useRef(false);

  useEffect(() => {
    if (accessToken && !isRequestingRef.current) {
      isRequestingRef.current = true;

      dispatch(refreshUser())
        .unwrap()
        .then(() => {
          isRequestingRef.current = false;
        })
        .catch(() => {
          isRequestingRef.current = false;
        });
    }
  }, [dispatch, accessToken]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Navigate to="/welcome" replace />} />
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="/auth/*" element={<AuthPage />} />
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <HomePage />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
};
