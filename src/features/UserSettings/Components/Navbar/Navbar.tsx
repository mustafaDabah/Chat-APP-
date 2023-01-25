import React from 'react';
import closeIcon from '../../../../assets/images/close.svg';
import { ButtonWithIcon } from '../../../../PublicComponents';
import { useMobileScreen } from '../../../../store/mobileScreen';

function Navbar() {
  const setUserSettings = useMobileScreen((state) => state.setUserSettings);

  return (
    <div className="container">
      <div className="h-[70px] shadow-sm flex justify-end items-center">
        <ButtonWithIcon
          icon={closeIcon}
          name="close icon"
          handelClick={setUserSettings}
        />
      </div>
    </div>
  );
}

export default Navbar;
