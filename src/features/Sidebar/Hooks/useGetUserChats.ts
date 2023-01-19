import { doc, DocumentData, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { useCurrentUser } from '../../../store/currentUser';

function useGetUserChats() {
  const [chats, setChats] = useState<DocumentData>([]);
  const currentUser = useCurrentUser((state) => state.currentUser);

  const getChats = () => {
    if (currentUser.uid) {
      const unsubscribe = onSnapshot(doc(db, 'userChats', currentUser.uid), (res) => {
        // @ts-ignore
        setChats(res.data());
      });

      return unsubscribe;
    }

    return null;
  };

  useEffect(() => {
    if (currentUser.uid) {
      getChats();
    }
  }, [currentUser.uid]);

  return chats;
}

export default useGetUserChats;
