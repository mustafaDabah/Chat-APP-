import React, { useState } from 'react';
import personImage from '../../../../assets/images/face.jpg';
import pictureIcon from '../../../../assets/images/picture.svg';
import editIcon from '../../../../assets/images/edit.svg';
import { ButtonWithIcon } from '../../../../PublicComponents';

function ProfilePictureForm() {
  const [image, setImage] = useState(null);

  // const handleChange = (event) => {
  //   setImage(event.target.files[0]);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // update user's profile picture using the image file
  // };

  return (
    <div />
  );
}

export default ProfilePictureForm;
