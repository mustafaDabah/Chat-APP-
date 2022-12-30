import React from 'react';
import menuIcon from '../../../../assets/images/menu.svg';
import searchIcon from '../../../../assets/images/search.svg';
import verticalMenuIcon from '../../../../assets/images/vertical menu.svg';

function Navbar() {
  return (
    <nav className=" bg-primary">
      <div className="container">
        <div className="flex justify-between h-[70px]">
          <div className="flex items-center flex-1">
            {/* --search input-- */}
            <label htmlFor="search" className="flex w-full h-[30px] justify-start items-center rounded-xl bg-third py-6 px-2">
              <img src={searchIcon} className="w-[20px] object-cover mr-2" alt="" />
              <input type="text" id="search" className="bg-third w-[100%] rounded-md outline-none text-white" placeholder="Search" />
            </label>
          </div>
          <img src={verticalMenuIcon} className="w-[30px]" alt="" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
/*

            {/* <button type="button" className="" onClick={handleMenu}>
              <img src={menuIcon} className="w-[70px] h-1/2 object-cover mr-4" alt="" />
            </button>
*/
