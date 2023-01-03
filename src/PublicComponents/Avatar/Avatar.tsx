import React from 'react';

interface AvatarProps {
    imageSrc: string | undefined
    name: string | undefined
}

function Avatar({ imageSrc, name }:AvatarProps) {
  return (
    <img src={imageSrc} alt={name} className="w-[50px] rounded-full object-cover" />
  );
}

export default Avatar;
