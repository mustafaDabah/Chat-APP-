import React from 'react';
import { signOut } from 'firebase/auth';
import existIcon from '../../../../assets/images/exist.svg';
import verticalMenuIcon from '../../../../assets/images/face.jpg';
import { Avatar, ButtonWithIconMemo } from '../../../../PublicComponents';
import { useStore } from '../../../../store/store';
import { auth } from '../../../../firebase';

function Navbar() {
  // const selectUserChat = useStore((state) => state.selectUserChat);
  const { selectUserChat, setCurrentUser } = useStore();

  const logout = () => {
    signOut(auth);
    // setCurrentUser({});
  };

  return (
    <nav className=" bg-white shadow-sm">
      <div className="container">
        <div className="flex justify-between items-center h-[70px]">
          <div className="flex items-center">
            {/* --user info-- */}
            <Avatar
              imageSrc={selectUserChat?.photoURL}
              name={selectUserChat?.displayName}
            />
            <h3 className="text-gray-600 text-xl ml-3">{selectUserChat?.displayName}</h3>
          </div>
          <ButtonWithIconMemo
            icon={existIcon}
            name="exist icon"
            handelClick={logout}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
