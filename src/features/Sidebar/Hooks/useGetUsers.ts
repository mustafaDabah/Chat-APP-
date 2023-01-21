import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { useCurrentUser } from '../../../store/currentUser';

function useGetUsers() {
  const [users, setUsers] = useState<DocumentData[]>([]);
  const currentUser = useCurrentUser((state) => state.currentUser);

  const getUsers = useCallback(async () => {
    console.log('users');
    const querySnapshot = await getDocs(collection(db, 'users'));
    const usersQuery = querySnapshot.docs.map((doc) => doc.data());
    // filter userQuery from current user
    const usersData = usersQuery.filter((user) => user.uid !== currentUser.uid);
    setUsers(usersData);
  }, []);

  console.log(users);

  useEffect(() => {
    getUsers();
  }, []);

  const handleSearch = (searchValue: string) => {
    if (!searchValue.length) {
      getUsers();
    }
    const selectUsersBySearch = users.filter((user) => user.displayName.toLowerCase().includes(searchValue.toLowerCase()));
    setUsers(selectUsersBySearch);
  };
  return { users, handleSearch };
}

export default useGetUsers;
