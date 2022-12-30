import React from 'react';
import { Messages, Navbar, SendMessage } from './Components';
import Avatar from '../../assets/images/face.jpg';
// bg-gray-500
function ChatMessages() {
  return (
    <div className="bg-forth w-full min-h-screen relative">
      <Navbar />
      <div className="h-[700px] overflow-auto">

        <Messages avatarUrl={Avatar} text="Hello!" timestamp="12:34 PM" sender="other-user" />
        <Messages avatarUrl={Avatar} text="Hi!" timestamp="12:35 PM" sender="current-user" />
        <Messages avatarUrl={Avatar} text="How are you? I hope you are doing well" timestamp="12:36 PM" sender="other-user" />
        <Messages avatarUrl={Avatar} text="I'm doing well, thanks for asking!" timestamp="12:37 PM" sender="current-user" />
        <Messages avatarUrl={Avatar} text="Hello!" timestamp="12:34 PM" sender="other-user" />
        <Messages avatarUrl={Avatar} text="Hi!" timestamp="12:35 PM" sender="current-user" />
        <Messages avatarUrl={Avatar} text="How are you? I hope you are doing well" timestamp="12:36 PM" sender="other-user" />
        <Messages avatarUrl={Avatar} text="I'm doing well, thanks for asking!" timestamp="12:37 PM" sender="current-user" />
        <Messages avatarUrl={Avatar} text="Hello!" timestamp="12:34 PM" sender="other-user" />
        <Messages avatarUrl={Avatar} text="Hi!" timestamp="12:35 PM" sender="current-user" />
        <Messages avatarUrl={Avatar} text="How are you? I hope you are doing well" timestamp="12:36 PM" sender="other-user" />
        <Messages avatarUrl={Avatar} text="I'm doing well, thanks for asking!" timestamp="12:37 PM" sender="current-user" />
      </div>
      <SendMessage />
    </div>
  );
}

export default ChatMessages;
