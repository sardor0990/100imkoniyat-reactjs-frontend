import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  // Replace with your token checking logic
  const isAuthenticated = !!localStorage.getItem('token'); // Example check

  if (!isAuthenticated) {
    // Redirect them to the login page if not authenticated
    return <Navigate to="/admin-login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
