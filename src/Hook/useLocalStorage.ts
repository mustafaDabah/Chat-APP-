import { useState } from 'react';
import { User } from 'firebase/auth';
import { useCurrentUser } from '../store/currentUser';

function useLocalStorage<T>(key: string, initialValue?: T) {
  const { setCurrentUser } = useCurrentUser();
  const [storedValue, setStoredValue] = useState<User>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
    //   console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: User) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      setCurrentUser(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
    //   console.log(error);
    }
  };

  return { storedValue, setValue };
}

export default useLocalStorage;
