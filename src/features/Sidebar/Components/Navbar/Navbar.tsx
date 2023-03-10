import React from 'react';
import verticalMenuIcon from '../../../../assets/images/vertical menu.svg';
import SearchInput from '../SearchInput/SearchInput';
import { ProfileMemo } from '../Profile/Profile';

interface NavbarProps {
  handleSearch: (searchValue: string) => void
}

function Navbar({ handleSearch }:NavbarProps) {
  return (
    <nav className=" bg-third">
      <div className="container">
        {/* --profile-- */}
        <ProfileMemo />
        <div className="flex justify-between h-[70px]">
          <div className="flex items-center flex-1">
            {/* --search input-- */}
            <SearchInput handleSearch={handleSearch} />
          </div>
          <img src={verticalMenuIcon} className="w-[30px]" alt="" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
export const NavbarMemo = React.memo(Navbar);

