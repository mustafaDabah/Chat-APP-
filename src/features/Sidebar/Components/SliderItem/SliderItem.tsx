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
      className="relative flex flex-col items-center"
    >
      <div className="mt-2 z-20">
        <Avatar
          imageSrc={user.photoURL}
          name={`user ${user.displayName}`}
        />
      </div>
      <div className="bg-secondary w-28 -mt-4 z-10 h-14 p-3 text-center rounded-lg flex items-end justify-center">
        <h3 className="text-white">{user.displayName.replace(/ .*/, '')}</h3>
      </div>
    </button>
  );
}

export default SliderItem;
export const SliderItemMemo = React.memo(SliderItem);
