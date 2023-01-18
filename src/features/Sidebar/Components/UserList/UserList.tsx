import React from 'react';
import useGetUserChats from '../../Hooks/useGetUserChats';
import { UserMemo } from '../User/User';

function UserList() {
  const chats = useGetUserChats();

  const displayUsers = Object.keys(chats).map((chat) => (
    <UserMemo
      image={chats[chat].userInfo.photoURL}
      name={chats[chat].userInfo.displayName}
      uid={chats[chat].userInfo.uid}
      lastMessage={chats[chat].lastMessage}
      key={chats[chat].userInfo.uid}
      time={chats[chat].date}
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

