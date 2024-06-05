import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth/*" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
