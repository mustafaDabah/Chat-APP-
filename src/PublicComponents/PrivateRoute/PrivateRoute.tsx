import { Navigate, Outlet } from 'react-router-dom';
import useLocalStorage from '../../Hook/useLocalStorage';

function PrivateRoute() {
  const { storedValue } = useLocalStorage('currentUser');

  console.log(Object.keys(storedValue || {}).length !== 0);
  // console.log(currentUser);

  return Object.keys(storedValue || {}).length !== 0 ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;

