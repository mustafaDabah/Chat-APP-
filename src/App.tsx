import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import { useStore } from './store/store';
import PrivateRoute from './PublicComponents/PrivateRoute';

function App() {
  const { setCurrentUser, currentUser } = useStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setCurrentUser(user);
    });
    return () => unsubscribe();
  }, [currentUser]);

  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={(
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          )}
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/sign-up" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
