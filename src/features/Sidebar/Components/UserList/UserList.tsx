import { DocumentData } from 'firebase/firestore';
import React from 'react';
import { User as UserTypes } from '../../../../utils/Types/registerTypes';
import User from '../User/User';

interface UsersListProps {
  users:DocumentData[]
}

function UserList({ users }:UsersListProps) {
  const displayUsers = users.map((user: UserTypes) => (
    <User
      image={user.photoURL}
      name={user.displayName}
      uid={user.uid}
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
export const UserListMemo = React.memo(UserList);
