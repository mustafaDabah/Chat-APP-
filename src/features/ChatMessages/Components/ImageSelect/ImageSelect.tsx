import React from 'react';
import deleteImgIcon from '../../../../assets/images/close.svg';

interface ImageSelectProps {
    handleClick:() => void
}

function ImageSelect({ handleClick }: ImageSelectProps) {
  return (
    <div className="bg-primary rounded-full p-3 w absolute bottom-24 flex right-1/2 z-10">
      <h3 className="text-xs capitalize text-gray-400">you have selected 1 images  </h3>
      <button type="button" className="w-3 ml-3" onClick={handleClick}>
        <img src={deleteImgIcon} alt="delete icon" />
      </button>
    </div>
  );
}

export default ImageSelect;
