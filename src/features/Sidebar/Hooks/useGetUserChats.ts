import { doc, DocumentData, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { useStore } from '../../../store/store';

function useGetUserChats() {
  const [chats, setChats] = useState<DocumentData>([]);
  const { currentUser } = useStore();

  useEffect(() => {
    const getChats = () => {
      if (currentUser.uid) {
        const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (res) => {
          setChats(res.data());
        });

        return unsub;
      }

      return null;
    };

    if (currentUser.uid) {
      getChats();
    }
  }, [currentUser.uid]);

  return chats;
}

export default useGetUserChats;
