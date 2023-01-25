import React from 'react';
import { useMobileScreen } from '../../store/mobileScreen';
import { Navbar, ProfilePictureForm, UserInfo } from './Components';

function UserSettings() {
  const isUserSettings = useMobileScreen((state) => state.isUserSettings);

  // const handleSubmit = (name) => {
  //   // update user's name
  // };
  // name="John Doe" onSubmit={handleSubmit}
  return (
    <div className={`bg-[#efeeff] min-h-screen w-full lg:w-[30%] animate-fadeInRight ${isUserSettings ? 'block' : 'hidden'} absolute lg:static z-40`}>
      <Navbar />
      <ProfilePictureForm />
      <UserInfo />
    </div>
  );
}

export default UserSettings;
