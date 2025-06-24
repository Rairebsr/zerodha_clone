import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/Authentication';

const ProtectedRoute = ({ children }) => {
  const { isVerified } = useAuth();

  return isVerified ? (
    children
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default ProtectedRoute;
