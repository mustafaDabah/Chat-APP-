import React, { useState } from 'react';
import { ChatMessages, Sidebar, UserSettings } from '../features';

function Home() {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <ChatMessages />
      <UserSettings />
    </div>
  );
}

export default Home;
