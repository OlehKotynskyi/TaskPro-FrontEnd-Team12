import React, { lazy, useEffect, useRef } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { Layout } from '../components/Layout/Layout';
import {
  selectIsRefreshing,
  selectAccessToken,
} from '../redux/auth/authSelectors';
import { refreshUser } from '../redux/auth/authOperations';
import { Loader } from '../components/Loaders/Loader';
import { ThemeProvider } from '../components/ThemeContext/ThemeContext';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { MainDashboard } from 'components/MainDashboard/MainDashboard';
import { Toaster } from 'react-hot-toast';

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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to="/welcome" replace />} />
            <Route
              path="/welcome"
              element={
                <RestrictedRoute redirectTo="/home">
                  <WelcomePage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/auth/*"
              element={
                <RestrictedRoute redirectTo="/home">
                  <AuthPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/home"
              element={
                <ThemeProvider>
                  <PrivateRoute>
                    <HomePage />
                  </PrivateRoute>
                </ThemeProvider>
              }
            >
              <Route path=":boardId" element={<MainDashboard />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
      <Toaster />
    </>
  );
};
