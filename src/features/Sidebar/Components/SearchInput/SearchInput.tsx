import React, { useState } from 'react';
import searchIcon from '../../../../assets/images/search.svg';

interface NavbarProps {
  handleSearch: (searchValue: string) => void
}

function SearchInput({ handleSearch }:NavbarProps) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <label htmlFor="search" className="flex w-full h-[30px] justify-start items-center rounded-xl bg-third py-6 px-2">
      <img src={searchIcon} className="w-[20px] object-cover mr-2" alt="" />
      <input
        type="text"
        id="search"
        className="bg-third w-[100%] rounded-md outline-none text-white"
        placeholder="Search"
        defaultValue={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={() => handleSearch(searchValue)}
      />
    </label>
  );
}

export default SearchInput;
