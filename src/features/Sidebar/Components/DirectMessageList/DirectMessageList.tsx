import React from 'react';
import useGetUserChats from '../../Hooks/useGetUserChats';
import { UserMessageMemo } from '../UserMessage/UserMessage';

function DirectMessageList() {
  const chats = useGetUserChats();

  const displayUsers = chats
    ? Object.values(chats)
      .sort((a, b) => b.date - a.date)
      .map(({ userInfo, lastMessage, date }) => (
        <UserMessageMemo
          image={userInfo.photoURL}
          name={userInfo.displayName}
          uid={userInfo.uid}
          lastMessage={lastMessage}
          key={userInfo.uid}
          time={date}
        />
      ))
    : null;

  return (
    <div className="container overflow-auto h-fit lg:h-[350px]">
      <h3 className="text-gray-300 text-sm mb-2 font-semibold pt-3">DIRECT MESSAGES </h3>
      {displayUsers}
    </div>
  );
}

export default DirectMessageList;
export const DirectMessageListMemo = React.memo(DirectMessageList);

