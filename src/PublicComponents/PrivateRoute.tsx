import { Navigate } from 'react-router-dom';
import { useStore } from '../store/store';

interface PropsPrivateRoute {
  children: JSX.Element;
}

function PrivateRoute({ children }:PropsPrivateRoute) {
  const currentUser = useStore((state) => state.currentUser);
  console.log(Object.keys(currentUser).length);

  // if (!currentUser.uid) {
  //   return <Navigate to="/login" />;
  // }
  return children;
}
export default PrivateRoute;

