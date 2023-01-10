import React from 'react';
import useGetUserChats from '../../Hooks/useGetUserChats';
import { UserMemo } from '../User/User';

interface ChatType {
  date:Date
  userInfo: {
    photoURL: string ;
    displayName: string;
    uid: string;
  };
  lastMessage: string;
}

function UserList() {
  const chats = useGetUserChats();

  const displayUsers = Object.entries(chats)?.map((user:[string, ChatType]) => (
    <UserMemo
      image={user[1].userInfo.photoURL}
      name={user[1].userInfo.displayName}
      uid={user[1].userInfo.uid}
      lastMessage={user[1].lastMessage}
      key={user[1].userInfo.uid}
      time={user[1].date}
    />
  ));

  return (
    <div className="container overflow-auto  h-[550px]">
      <h3 className="text-gray-200 text-xl font-semibold  pt-3 capitalize">my chat list </h3>
      {displayUsers}
    </div>
  );
}

export default UserList;
export const UserListMemo = React.memo(UserList);
