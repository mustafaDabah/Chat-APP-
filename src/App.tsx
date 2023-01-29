import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { onAuthStateChanged, User } from 'firebase/auth';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import { useCurrentUser } from './store/currentUser';
import { PrivateRoute } from './PublicComponents';
import { auth } from './firebase';

function App() {
  const { setCurrentUser, currentUser } = useCurrentUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user as User);
    });

    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<LogIn />} />
      <Route path="/sign-up" element={<Register />} />
    </Routes>
  );
}

export default App;
