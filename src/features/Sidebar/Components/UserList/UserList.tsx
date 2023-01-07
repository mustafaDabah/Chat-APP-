import { doc, DocumentData, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../../firebase';
import { useStore } from '../../../../store/store';
import { User as UserTypes } from '../../../../utils/Types/registerTypes';
import useGetUserChats from '../../Hooks/useGetUserChats';
import User from '../User/User';

interface UsersListProps {
  users:DocumentData[]
}

interface ChatType {
  userInfo: {
    photoURL: string ;
    displayName: string;
    uid: string;
  };
  lastMessage: string;
}

function UserList({ users }:UsersListProps) {
  const chats = useGetUserChats();

  console.log(chats);

  const displayUsers = chats && Object.entries(chats)?.map((user:[string, ChatType]) => (
    <User
      image={user[1].userInfo.photoURL}
      name={user[1].userInfo.displayName}
      uid={user[1].userInfo.uid}
      lastMessage={user[1].lastMessage}
      key={user[1].userInfo.uid}
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
