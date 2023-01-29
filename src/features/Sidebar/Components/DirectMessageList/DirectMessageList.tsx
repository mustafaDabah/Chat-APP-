import React from 'react';
import useGetUserChats from '../../Hooks/useGetUserChats';
import { UserMessageMemo } from '../UserMessage/UserMessage';

function DirectMessageList() {
  const chats = useGetUserChats();

  const displayUsers = chats !== undefined ? (
    Object.keys(chats).map((chat) => (
      <UserMessageMemo
        image={chats[chat].userInfo.photoURL}
        name={chats[chat].userInfo.displayName}
        uid={chats[chat].userInfo.uid}
        lastMessage={chats[chat].lastMessage}
        key={chats[chat].userInfo.uid}
        time={chats[chat].date}
      />
    ))
  ) : null;

  return (
    <div className="container overflow-auto h-fit lg:h-[350px]">
      <h3 className="text-gray-300 text-sm mb-2 font-semibold pt-3">DIRECT MESSAGES </h3>
      {displayUsers}
    </div>
  );
}

export default DirectMessageList;
export const DirectMessageListMemo = React.memo(DirectMessageList);

