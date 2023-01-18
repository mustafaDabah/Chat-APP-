import React from 'react';
import { signOut } from 'firebase/auth';
import existIcon from '../../../../assets/images/exist.svg';
import arrowBack from '../../../../assets/images/arrow-left.svg';
import { ButtonWithIconMemo } from '../../../../PublicComponents';
import { useStore } from '../../../../store/store';
import { auth } from '../../../../firebase';
import { useMobileScreen } from '../../../../store/mobileScreen';

function Navbar() {
  const { selectUserChat, resetCurrentUser } = useStore();
  const resetIsSelectUser = useMobileScreen((state) => state.resetIsSelectUser);

  const logout = () => {
    signOut(auth);
    resetCurrentUser();
  };

  return (
    <nav className=" bg-white shadow-sm">
      <div className="container">
        <div className="flex justify-between items-center h-[70px]">
          <div className="flex items-center">
            {/* --user info-- */}
            <button type="button" className="lg:hidden block" onClick={resetIsSelectUser}>
              <img src={arrowBack} alt="back icon" className="w-8" />
            </button>
            <h3 className="text-gray-600 text-xl ml-1 lg:ml-3">{selectUserChat.displayName}</h3>
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

