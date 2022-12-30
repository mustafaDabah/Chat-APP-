import React from 'react';
import existIcon from '../../../../assets/images/exist.svg';
import verticalMenuIcon from '../../../../assets/images/face.jpg';
import { Avatar, ButtonWithIcon } from '../../../../PublicComponents';

function Navbar() {
  return (
    <nav className=" bg-white shadow-sm">
      <div className="container">
        <div className="flex justify-between items-center h-[70px]">
          <div className="flex items-center">
            {/* --user info-- */}
            <Avatar
              imageSrc={verticalMenuIcon}
              name="mustafa dabah"
            />
            <h3 className="text-gray-600 text-xl ml-3">mustafa dabah</h3>
          </div>
          <ButtonWithIcon
            icon={existIcon}
            name="exist icon"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
