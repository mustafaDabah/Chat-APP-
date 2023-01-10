import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { useStore } from '../../../store/store';
import { db } from '../../../firebase';

function useMessages() {
  const [messages, setMessages] = useState([]);
  const chatId = useStore((state) => state.chatId);

  async function getMessages() {
    const unSub = onSnapshot(doc(db, 'chats', chatId), (response) => {
      if (response.exists()) {
        setMessages(response.data().messages);
      }
    });

    return unSub;
  }
  useEffect(() => {
    if (chatId) {
      getMessages();
    }
  }, [chatId]);

  return messages;
}

export default useMessages;
