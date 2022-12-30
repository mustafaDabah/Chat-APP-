import React from 'react';

interface ButtonWithIconProps {
    icon:string
    name:string
}

function ButtonWithIcon({ icon, name }: ButtonWithIconProps) {
  return (
    <div className="w-[45px] h-[45px] rounded-full p-1 bg-forth flex justify-center items-center cursor-pointer">
      <img src={icon} className="w-[30px]" alt={name} />
    </div>
  );
}

export default ButtonWithIcon;
