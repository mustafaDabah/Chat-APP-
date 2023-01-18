import React from 'react';
import { ChatMessages, Sidebar } from '../features';
import { useMobileScreen } from '../store/mobileScreen';

function Home() {
  const { isSelectUser } = useMobileScreen();
  return (
    <div className="flex justify-between relative">
      <Sidebar />
      <ChatMessages />
    </div>
  );
}

export default Home;
