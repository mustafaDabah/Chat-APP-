import React from 'react';
import personImage from '../../../../assets/images/face.jpg';
import { Avatar } from '../../../../PublicComponents';

function User() {
  return (
    <div className="flex items-center justify-between border-b-[2px] border-third py-3">
      <button type="button" className="flex justify-start items-center outline-none">
        <Avatar imageSrc={personImage} name="test" />
        <div className="ml-5 text-left">
          <h3 className="text-white text-xl">Mustafa Dabah</h3>
          <p className="text-gray-400 italic truncate  w-40">Lorem ipsum doloripsum do Lorem ipsum doloripsumLorem ipsum doloripsumlor sit.</p>
        </div>
      </button>
      <p className="text-gray-200">9:30pm</p>
    </div>
  );
}

export default User;
