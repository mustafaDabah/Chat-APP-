import React, { useEffect, useState } from 'react';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebase';
import { User as UserTypes } from '../../../../utils/Types/registerTypes';
import User from '../User/User';
import { useStore } from '../../../../store/store';

function UserList() {
  const currentUser = useStore((state) => state.currentUser);

  const [users, setUsers] = useState<DocumentData>([]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const usersQuery = querySnapshot.docs.map((doc) => doc.data());
      setUsers(usersQuery);
      console.log(usersQuery);
      // querySnapshot.forEach((doc) => setUsers(doc.data()));
    };

    getUsers();
  }, []);

  console.log(users);

  const displayUsers = users.map((user: UserTypes) => (
    <User
      image={user.photoURL}
      name={user.displayName}
      key={user.uid}
    />
  ));

  return (
    <div className="container overflow-auto h-[800px]">
      {displayUsers}
    </div>
  );
}

export default UserList;
