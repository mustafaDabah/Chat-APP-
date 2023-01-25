import React from 'react';
import { Avatar } from '../../../../PublicComponents';
import { UserChatTypes } from '../../../../utils/Types/registerTypes';
import useSetChat from '../../Hooks/useSetChat';

interface UserProps {
  user:UserChatTypes
}

function User({ user }:UserProps) {
  const { setChat } = useSetChat(user);

  return (
    <button
      onClick={setChat}
      type="button"
      className="relative flex justify-start items-center px-2 mt-1"
    >
      <Avatar
        imageSrc={user.photoURL}
        name={`user ${user.displayName}`}
      />
      <div className="ml-3">
        <h4 className="text-white">{user.displayName}</h4>
      </div>
    </button>
  );
}

export default User;
export const UserMemo = React.memo(User);
