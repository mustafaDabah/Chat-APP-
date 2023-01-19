import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useCurrentUser } from '../../store/currentUser';
import { auth } from '../../firebase';

interface PropsPrivateRoute {
  children: JSX.Element;
}

function PrivateRoute({ children }:PropsPrivateRoute) {
  const { setCurrentUser, currentUser } = useCurrentUser();

  console.log(Object.keys(currentUser).length);
  console.log(Object.keys(currentUser).length);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setCurrentUser(user);
    });
    return () => unsubscribe();
  }, [currentUser]);

  return Object.keys(currentUser).length > 0 ? children : <Navigate to="/login" replace />;
}
export default PrivateRoute;

