import React from 'react';
import { ChatMessages, Sidebar } from '../features';

function Home() {
  return (
    <div className="flex justify-between overflow-hidden">
      <Sidebar />
      <ChatMessages />
    </div>
  );
}

export default Home;
