import { useEffect, useLayoutEffect } from 'react';
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

  useLayoutEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // const userData:User = {
      //   uid: user?.uid as string,
      //   displayName: user?.displayName as string,
      //   email: user?.email as string,
      //   photoURL: user?.photoURL as string,
      // };
      if (user) setCurrentUser(user);
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
