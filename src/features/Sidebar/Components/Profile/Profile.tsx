import React from 'react';
import { useStore } from '../../../../store/store';
import editIcon from '../../../../assets/images/edit.svg';

function Profile() {
  const currentUser = useStore((state) => state.currentUser);

  return (
    <div className="flex justify-between items-center">
      <div className="flex pt-2 items-center">
        <img src={currentUser.photoURL || ''} alt="" className="w-[80px] h-[80px] object-cover" />
        <div className="ml-2">
          <h2 className="text-xl capitalize  text-forth">{currentUser.displayName}</h2>
          <h3 className="text-gray-400 italic">{currentUser.email}</h3>
        </div>
      </div>
      <button type="button" className="bg-third w-[50px] h-[50px] rounded-full flex justify-center items-center">
        <img src={editIcon} alt="" className="w-[25px]" />
      </button>
    </div>
  );
}

export default Profile;
export const ProfileMemo = React.memo(Profile);
