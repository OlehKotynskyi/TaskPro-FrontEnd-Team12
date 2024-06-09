import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn } from '../redux/auth/authSelectors.js';

const PrivateRoute = ({ children, redirectTo }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <>{isLoggedIn ? children : <Navigate to={redirectTo} replace />}</>;
};

export default PrivateRoute;
