import React from 'react';

interface ButtonWithIconProps {
    icon:string
    name:string
    handelClick:() => void
}

function ButtonWithIcon({ icon, name, handelClick }: ButtonWithIconProps) {
  return (
    <button
      type="button"
      className="w-[45px] h-[45px] rounded-full p-1 bg-forth flex justify-center items-center cursor-pointer"
      onClick={handelClick}
    >
      <img src={icon} className="w-[30px]" alt={name} />
    </button>
  );
}

export default ButtonWithIcon;
