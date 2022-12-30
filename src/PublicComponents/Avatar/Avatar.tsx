import React from 'react';

interface AvatarProps {
    imageSrc: string
    name: string
}

function Avatar({ imageSrc, name }:AvatarProps) {
  return (
    <img src={imageSrc} alt={name} className="w-[10%] rounded-full" />
  );
}

export default Avatar;
