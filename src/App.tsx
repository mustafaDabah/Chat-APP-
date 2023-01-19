import { useEffect, useLayoutEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import { useCurrentUser } from './store/currentUser';

function App() {
  const { setCurrentUser, currentUser } = useCurrentUser();

  const [usert, setUsert] = useState(true);

  useLayoutEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // @ts-ignore
        setUsert(false);
        setCurrentUser(user);
      }
    });
    // setFirst(true);
    return () => unsubscribe();
  }, [currentUser]);

  console.log(Object.keys(currentUser).length > 0);
  // element={Object.keys(currentUser).length <= 0 ? <Navigate to="/login" /> : <div>hello </div>}

  return (
    <Routes>
      <Route
        path="/"
        element={Object.keys(currentUser).length <= 0 ? <LogIn /> : <Home />}
      />
      <Route
        path="/login"
        element={<LogIn />}
      />
      <Route path="/sign-up" element={<Register />} />
    </Routes>
  );
}

export default App;
