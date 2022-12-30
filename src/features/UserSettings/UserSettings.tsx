import React from 'react';
import { Navbar, ProfilePictureForm, UserInfo } from './Components';

function UserSettings() {
  const handleSubmit = (name) => {
    // update user's name
  };
  return (
    <div className="bg-gray-white w-1/2">
      <Navbar />
      <ProfilePictureForm />
      <UserInfo name="John Doe" onSubmit={handleSubmit} />
    </div>
  );
}

export default UserSettings;
