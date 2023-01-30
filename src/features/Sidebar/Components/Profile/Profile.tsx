import React from 'react';
import { ButtonWithIconMemo } from '../../../../PublicComponents';
import { useCurrentUser } from '../../../../store/currentUser';
import existIcon from '../../../../assets/images/exist.svg';
import useReset from '../../../../Hooks/useReset';

function Profile() {
  const currentUser = useCurrentUser((state) => state.currentUser);
  const logout = useReset();

  return (
    <div className="flex justify-between items-center ">
      <div className="flex pt-2 items-center">
        <img src={currentUser.photoURL || ''} alt="" className="w-[80px] h-[80px] rounded-full object-cover border-secondary border-4 border-solid" />
        <div className="ml-2">
          <h2 className="text-xl capitalize text-forth font-bold ">{currentUser.displayName}</h2>
          <h3 className="text-gray-400 italic text-xs md:text-sm">{currentUser.email}</h3>
        </div>
      </div>
      <ButtonWithIconMemo
        icon={existIcon}
        name="exist icon"
        handelClick={logout}
      />
    </div>
  );
}

export default Profile;
export const ProfileMemo = React.memo(Profile);
