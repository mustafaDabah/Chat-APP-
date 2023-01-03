import React, { useState } from 'react';
import { ChatMessages, Sidebar } from '../features';

function Home() {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <ChatMessages />
    </div>
  );
}

export default Home;
