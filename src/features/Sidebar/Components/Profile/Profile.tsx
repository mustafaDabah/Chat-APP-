import React from 'react';
import editIcon from '../../../../assets/images/edit.svg';
import { useCurrentUser } from '../../../../store/currentUser';
import { useMobileScreen } from '../../../../store/mobileScreen';

function Profile() {
  const currentUser = useCurrentUser((state) => state.currentUser);
  const setUserSettings = useMobileScreen((state) => state.setUserSettings);

  console.log(currentUser);

  return (
    <div className="flex justify-between items-center ">
      <div className="flex pt-2 items-center">
        <img src={currentUser.photoURL || ''} alt="" className="w-[80px] h-[80px] rounded-full object-cover border-secondary border-4 border-solid" />
        <div className="ml-2">
          <h2 className="text-xl capitalize text-forth font-bold ">{currentUser.displayName}</h2>
          <h3 className="text-gray-400 italic text-xs md:text-sm">{currentUser.email}</h3>
        </div>
      </div>
      <button
        type="button"
        onClick={setUserSettings}
        className="bg-third w-[50px] h-[50px] rounded-full flex justify-center items-center"
      >
        <img src={editIcon} alt="" className="w-[25px]" />
      </button>
    </div>
  );
}

export default Profile;
export const ProfileMemo = React.memo(Profile);
