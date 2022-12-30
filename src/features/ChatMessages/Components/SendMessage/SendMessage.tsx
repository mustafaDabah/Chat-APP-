import React from 'react';
import pictureIcon from '../../../../assets/images/picture.svg';
import sendIcon from '../../../../assets/images/send.svg';

function SendMessage() {
  return (
    <div className="bg-white shadow-md h-20 mb-0 absolute bottom-0 w-full">
      <div className="container">
        <div className="flex justify-between h-[70px]">
          <div className="flex items-center flex-1">
            {/* --search input-- */}
            <label htmlFor="write" className="flex w-full  h-[30px] justify-start items-center rounded-xl  py-6 px-2">
              <input type="text" id="write" className=" w-[100%] rounded-md outline-none text-gray-600" placeholder="Write Message" />
              <img src={pictureIcon} className="w-[20px] object-cover mr-2" alt="" />
            </label>
          </div>
          <img src={sendIcon} className="w-[30px]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SendMessage;
