import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase';

function useAuth() {
  // @ts-ignore
  const [user, setUser] = useState<User>({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      if (userData) {
        setUser(userData);
      }
    });
    return () => unsubscribe();
  }, []);

  return user;
}

export default useAuth;
