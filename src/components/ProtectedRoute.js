import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = useContext(AuthContext);

  
  return isLoggedIn ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;