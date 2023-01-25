import React, { useState } from 'react';
import editIcon from '../../../../assets/images/edit.svg';
// { name: any, onSubmit: any }
function UserInfo() {
  const [newName, setNewName] = useState('');

  const handleChange = (event: any) => {
    setNewName(event.target.value);
  };

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   onSubmit(newName);
  // };
  // onSubmit={handleSubmit}
  return (
    <form>
      <div className="container">
        <div className="relative pt-3 rounded-md shadow-sm ">
          <input
            type="text"
            // value={newName}
            onChange={handleChange}
            className="py-2 px-4 text-center text-xl w-full rounded-md outline-none "
          />
          <div className="absolute inset-y-0 right-0 pt-4 flex items-center px-2 text-gray-700 pointer-events-none">
            <img src={editIcon} className="w-4" alt="" />
          </div>
        </div>
        <button type="submit" className="mt-4 px-4 py-2 font-medium text-white bg-secondary w-full uppercase rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800">
          Update
        </button>
      </div>
    </form>
  );
}
export default UserInfo;
