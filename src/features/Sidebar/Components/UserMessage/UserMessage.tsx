import { Timestamp } from 'firebase/firestore';
import React from 'react';
import { Avatar } from '../../../../PublicComponents';
import { getTime } from '../../../../utils/getTime';
import { UserChatTypes } from '../../../../utils/Types/registerTypes';
import useSetChat from '../../Hooks/useSetChat';
import { useStore } from '../../../../store/store';

interface UserProps {
  image: string;
  name: string;
  uid: string;
  lastMessage: string;
  time:Timestamp
}

function UserMessage({ image, name, lastMessage, time, uid }:UserProps) {
  const selectUserChat = useStore((state) => state.selectUserChat);
  const user:UserChatTypes = {
    uid,
    displayName: name,
    lastMessage,
    photoURL: image,
  };
  const { setChat } = useSetChat(user);

  return (
    <div
      className={`flex items-center justify-between border-b-[2px] border-third rounded-lg p-2 ${selectUserChat.uid === uid ? 'bg-secondary' : ''} `}
    >
      <button type="button" className="flex justify-start items-center outline-none" onClick={setChat}>
        <Avatar imageSrc={image} name={name} />
        <div className="ml-5 text-left">
          <h3 className="text-white text:md lg:text-xl">{name}</h3>
          <p className="text-gray-300 italic truncate w-40 text-sm lg:text-md">{lastMessage}</p>
        </div>
      </button>
      <p className="text-gray-200 text-sm lg:text-md">{getTime(time)}</p>
    </div>
  );
}

export default UserMessage;
export const UserMessageMemo = React.memo(UserMessage);

