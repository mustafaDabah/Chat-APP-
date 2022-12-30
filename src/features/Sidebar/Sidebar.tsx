import React, { useState } from 'react';
import { Navbar, User } from './Components';

function Sidebar() {
  return (
    <section className="bg-primary min-h-screen w-[60%]">
      {/* navbar */}
      <Navbar />
      <div className="container overflow-auto h-[800px]">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </section>
  );
}

export default Sidebar;
