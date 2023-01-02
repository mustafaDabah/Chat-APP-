import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import { useStore } from './store/store';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  const setCurrentUser = useStore((state) => state.setCurrentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={(
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        )}
      />
      <Route path="/login" element={<LogIn />} />
      <Route path="/sign-up" element={<Register />} />
    </Routes>
  );
}

export default App;
