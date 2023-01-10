import React from 'react';
import { Navbar, UserInfo } from './Components';

function UserSettings() {
  // const handleSubmit = (name) => {
  //   // update user's name
  // };
  // name="John Doe" onSubmit={handleSubmit}
  return (
    <div className="bg-gray-white w-1/2">
      <Navbar />
      {/* <ProfilePictureForm /> */}
      <UserInfo />
    </div>
  );
}

export default UserSettings;
