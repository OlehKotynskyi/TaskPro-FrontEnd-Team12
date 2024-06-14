import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

const RestrictedRoute = ({ children, redirectTo }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : children;
};

export default RestrictedRoute;
