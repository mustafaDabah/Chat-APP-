import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase';

function useGetUsers() {
  const [users, setUsers] = useState<DocumentData[]>([]);

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const usersQuery = querySnapshot.docs.map((doc) => doc.data());
    setUsers(usersQuery);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSearch = (searchValue: string) => {
    if (!searchValue.length) {
      getUsers();
    }
    const selectUsersBySearch = users?.filter((user) => user.displayName.toLowerCase().includes(searchValue.toLowerCase()));
    setUsers(selectUsersBySearch);
  };
  return { users, handleSearch };
}

export default useGetUsers;
