import React, { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { Messages, Navbar, SendMessage } from './Components';
import Avatar from '../../assets/images/face.jpg';
import { useStore } from '../../store/store';
import { db } from '../../firebase';
// bg-gray-500
function ChatMessages() {
  const [messages, setMessages] = useState([]);

  const { chatId, selectUserChat } = useStore();

  // console.log(chatId);

  useEffect(() => {
    async function getMessages() {
      const unSub = onSnapshot(doc(db, 'chats', chatId), (doc) => {
        if (doc.exists()) {
          setMessages(doc.data().messages);
        }
      });

      return unSub;
    }

    if (chatId) {
      getMessages();
    }
  }, [chatId]);
  // bg-forth
  return (
    <div className="bg-forth w-full min-h-screen relative">
      <Navbar />
      <div className="h-[700px] overflow-auto">
        {messages.map((message) => (
          <Messages message={message} />
        ))}
        {/* <Messages avatarUrl={Avatar} text="Hello!" timestamp="12:34 PM" sender="other-user" />
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
        <Messages avatarUrl={Avatar} text="I'm doing well, thanks for asking!" timestamp="12:37 PM" sender="current-user" /> */}
      </div>
      <SendMessage />
    </div>
  );
}

export default ChatMessages;
