import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/ProviderContext/ProviderContext';

const PriveteRoute = ({children}) => {
  const {user,loading}=useContext(AuthContext);
  const location=useLocation();
  if(loading){
    return <Spinner animation="border" variant="primary" />
}
    
  if(!user){
    return <Navigate to="/logIn" state={{form: location}} replace></Navigate>
  }
return children;
};

export default PriveteRoute;