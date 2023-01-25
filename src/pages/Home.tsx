import React from 'react';
import { ChatMessages, Sidebar, UserSettings } from '../features';
import { useMobileScreen } from '../store/mobileScreen';

function Home() {
  const { isSelectUser } = useMobileScreen();
  return (
    <div className="flex justify-between relative overflow-hidden">
      <Sidebar />
      <ChatMessages />
      <UserSettings />
    </div>
  );
}

export default Home;
