import React from 'react';
import menuIcon from '../../../../assets/images/menu.svg';
import verticalMenuIcon from '../../../../assets/images/vertical menu.svg';
import { useStore } from '../../../../store/store';
import SearchInput from '../SearchInput/SearchInput';
import editIcon from '../../../../assets/images/edit.svg';
import { ButtonWithIcon } from '../../../../PublicComponents';

interface NavbarProps {
  handleSearch: (searchValue: string) => void
}

function Navbar({ handleSearch }:NavbarProps) {
  const { currentUser } = useStore();

  return (
    <nav className=" bg-primary">
      <div className="container">
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
/*

            {/* <button type="button" className="" onClick={handleMenu}>
              <img src={menuIcon} className="w-[70px] h-1/2 object-cover mr-4" alt="" />
            </button>
*/
