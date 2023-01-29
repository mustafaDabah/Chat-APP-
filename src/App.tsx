import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { onAuthStateChanged, User } from 'firebase/auth';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import { useCurrentUser } from './store/currentUser';
import { PrivateRoute } from './PublicComponents';
import Test from './pages/Test';
import useLocalStorage from './Hook/useLocalStorage';
import { auth } from './firebase';

function App() {
  const { setCurrentUser, currentUser } = useCurrentUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Auth', user);
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
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
