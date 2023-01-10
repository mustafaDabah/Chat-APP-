import React from 'react';
import closeIcon from '../../../../assets/images/close.svg';
import { ButtonWithIcon } from '../../../../PublicComponents';

function Navbar() {
  return (
    <div className="container">
      <div className="h-[70px] shadow-sm flex justify-end items-center">
        {/* <ButtonWithIcon
          icon={closeIcon}
          name="close icon"
        /> */}
      </div>
    </div>
  );
}

export default Navbar;
