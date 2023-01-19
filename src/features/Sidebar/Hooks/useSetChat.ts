import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../../../firebase';
import { useCurrentUser } from '../../../store/currentUser';
import { useMobileScreen } from '../../../store/mobileScreen';
import { useStore } from '../../../store/store';
import { UserChatTypes } from '../../../utils/Types/registerTypes';

function useSetChat(selectUser:UserChatTypes) {
  const { currentUser } = useCurrentUser();
  const { setUserChat, setChatId } = useStore();
  const combinedId = currentUser.uid > selectUser.uid ? currentUser.uid + selectUser.uid : selectUser.uid + currentUser.uid;
  const setIsSelectUser = useMobileScreen((state) => state.setIsSelectUser);

  const setChat = async () => {
    try {
      const res = await getDoc(doc(db, 'chats', combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, 'chats', combinedId), { messages: [] });

        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [`${combinedId}.userInfo`]: {
            uid: selectUser.uid,
            displayName: selectUser.displayName,
            photoURL: selectUser.photoURL,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });

        await updateDoc(doc(db, 'userChats', selectUser.uid), {
          [`${combinedId}.userInfo`]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });
      }

      setChatId(combinedId);
      const userInfo:UserChatTypes = {
        displayName: selectUser.displayName,
        photoURL: selectUser.photoURL,
        lastMessage: selectUser.lastMessage,
        uid: selectUser.uid,
      };
      setUserChat(userInfo);
      setIsSelectUser();
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return { setChat };
}

export default useSetChat;
