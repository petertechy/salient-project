import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../state/auth/authSlice';

const RequiredAuth = () => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  return token ? <Outlet /> : <Navigate to="/user/sign-in" state={{ from: location }} replace />;
};

export default RequiredAuth;
