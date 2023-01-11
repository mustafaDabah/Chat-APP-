import React from 'react';
import { Avatar } from '../../../../PublicComponents';
import { UserChatTypes } from '../../../../utils/Types/registerTypes';
import useSetChat from '../../Hooks/useSetChat';

interface UserProps {
  user:UserChatTypes
}

function SliderItem({ user }:UserProps) {
  const { setChat } = useSetChat(user);

  return (
    <button
      onClick={setChat}
      type="button"
      className="hover:border-secondary rounded-full border-solid hover:border-2 ease-linear duration-300  "
    >
      <Avatar
        imageSrc={user.photoURL}
        name={`user ${user.displayName}`}
      />
      <div className="bg-secondary w-22 h-10 p-3 text-center m-1">
        <h3>{user.displayName}</h3>
      </div>
    </button>
  );
}

export default SliderItem;
export const SliderItemMemo = React.memo(SliderItem);
