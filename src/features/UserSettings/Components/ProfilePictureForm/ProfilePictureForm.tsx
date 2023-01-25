import React, { useState } from 'react';
import personImage from '../../../../assets/images/face.jpg';
import pictureIcon from '../../../../assets/images/picture.svg';
import editIcon from '../../../../assets/images/edit.svg';
import { ButtonWithIcon, ButtonWithIconMemo } from '../../../../PublicComponents';

function ProfilePictureForm() {
  const [image, setImage] = useState(null);

  const handleChange = (event : any) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // update user's profile picture using the image file
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex justify-center items-center pt-3">
      <button type="button" className="relative w-64 h-64 rounded-full bg-[#c7c3ff] focus:outline-none focus:shadow-outline-indigo">
        {image ? (
          <>
            <div className="absolute left-5 cursor-pointer">
              {/* <ButtonWithIconMemo
                icon={editIcon}
                name="edit icon"
                handelClick={handleChange}
              /> */}
            </div>
            {/* <img src={URL.createObjectURL(image)} alt="Profile picture preview" className="w-full h-full rounded-full object-cover" /> */}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={pictureIcon} className="w-[30px] " alt="" />
            <span className="block ml-2 text-gray-100 font-medium text-base leading-6 text-center">Change Profile Picture</span>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          className="opacity-0 cursor-pointer absolute w-64 h-64 z-10 top-0 right-0"
          onChange={handleChange}
        />
      </button>
      {image && (
        <button type="submit" className="absolute bottom-0 right-0 mb-4 mr-4 py-2 px-4 bg-indigo-600 rounded-md text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800">
          Update
        </button>
      )}
    </form>
  );
}

export default ProfilePictureForm;
