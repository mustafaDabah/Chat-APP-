import { Navigate, Outlet } from 'react-router-dom';
import useLocalStorage from '../../Hooks/useLocalStorage';

function PrivateRoute() {
  const { storedValue } = useLocalStorage('currentUser');

  return Object.keys(storedValue || {}).length !== 0 ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;

