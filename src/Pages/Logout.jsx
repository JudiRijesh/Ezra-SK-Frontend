import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

function Logout() {
  const { logOutUser } = useContext(AuthContext); 
  const navigate = useNavigate();

  useEffect(() => {
    logOutUser();            
    navigate('/');           
  }, [logOutUser, navigate]); 

  return null; 
}

export default Logout;
