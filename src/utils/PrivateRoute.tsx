import React from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from '../store/store';

interface PropsPrivateRoute {
  children: JSX.Element;
}

function PrivateRoute({ children }:PropsPrivateRoute) {
  const currentUser = useStore((state) => state.currentUser);

  if (Object.keys(currentUser).length <= 0) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default PrivateRoute;

